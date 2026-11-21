import test from 'node:test';
import assert from 'node:assert';
import app from '../src/app.js';

let server;
let baseUrl;

test.before(async () => {
  await new Promise((resolve) => {
    server = app.listen(0, () => {
      const port = server.address().port;
      baseUrl = `http://localhost:${port}/api`;
      resolve();
    });
  });
});

test.after(async () => {
  await new Promise((resolve) => {
    server.close(resolve);
  });
});

test('Health check endpoint returns 200 and healthy status', async () => {
  const res = await fetch(`${baseUrl}/health`);
  assert.strictEqual(res.status, 200);
  const data = await res.json();
  assert.strictEqual(data.success, true);
  assert.strictEqual(data.status, 'HEALTHY');
});

test('Products endpoint returns products list', async () => {
  const res = await fetch(`${baseUrl}/products`);
  assert.strictEqual(res.status, 200);
  const data = await res.json();
  assert.strictEqual(data.success, true);
  assert.ok(data.count >= 12, 'Expected at least 12 luxury products');
});

test('Products filtering by department works', async () => {
  const res = await fetch(`${baseUrl}/products?department=menswear`);
  assert.strictEqual(res.status, 200);
  const data = await res.json();
  assert.strictEqual(data.success, true);
  assert.ok(data.data.every(p => p.department === 'menswear'));
});

test('Get single product by id returns product', async () => {
  const res = await fetch(`${baseUrl}/products/mens-suit-charcoal`);
  assert.strictEqual(res.status, 200);
  const data = await res.json();
  assert.strictEqual(data.success, true);
  assert.strictEqual(data.data.id, 'mens-suit-charcoal');
});

test('Create bespoke order endpoint validates and creates order', async () => {
  const payload = {
    name: 'Duchess of Cambridge',
    email: 'private.client@palace.uk',
    address: 'Kensington',
    city: 'London',
    country: 'United Kingdom',
    deliveryMethod: 'white-glove',
    tailoringNotes: 'Custom hem length.',
    items: [
      {
        productId: 'gown-noir-silk-column',
        selectedSize: 'FR 38',
        quantity: 1
      }
    ]
  };

  const res = await fetch(`${baseUrl}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  assert.strictEqual(res.status, 201);
  const data = await res.json();
  assert.strictEqual(data.success, true);
  assert.ok(data.data.id.startsWith('RVN-'));
  assert.strictEqual(data.data.clientEmail, 'private.client@palace.uk');
  assert.strictEqual(data.data.total, 4200);
});

test('Create appointment endpoint books atelier fitting', async () => {
  const payload = {
    salon: 'Milan - Via Montenapoleone',
    service: 'Haute Couture Evening Gown Fitting',
    name: 'Contessa Rossi',
    email: 'rossi@milano.it'
  };

  const res = await fetch(`${baseUrl}/appointments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  assert.strictEqual(res.status, 201);
  const data = await res.json();
  assert.strictEqual(data.success, true);
  assert.ok(data.data.id.startsWith('APT-'));
  assert.strictEqual(data.data.clientName, 'Contessa Rossi');
});

test('Newsletter subscription endpoint registers email', async () => {
  const payload = {
    email: `vip.${Date.now()}@bourbon.fr`
  };

  const res = await fetch(`${baseUrl}/inquiries/newsletter`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  assert.strictEqual(res.status, 201);
  const data = await res.json();
  assert.strictEqual(data.success, true);
});
