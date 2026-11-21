import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { INITIAL_PRODUCTS } from '../data/products.data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, '../../data');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

class JsonStore {
  constructor(collectionName, defaultData = []) {
    this.filePath = path.join(DATA_DIR, `${collectionName}.json`);
    this.defaultData = defaultData;
    this.init();
  }

  init() {
    try {
      if (!fs.existsSync(this.filePath)) {
        fs.writeFileSync(this.filePath, JSON.stringify(this.defaultData, null, 2), 'utf8');
      }
    } catch (err) {
      console.error(`Failed to initialize JSON store at ${this.filePath}:`, err);
    }
  }

  read() {
    try {
      if (!fs.existsSync(this.filePath)) {
        return [...this.defaultData];
      }
      const raw = fs.readFileSync(this.filePath, 'utf8');
      return JSON.parse(raw);
    } catch (err) {
      console.error(`Error reading ${this.filePath}:`, err);
      return [];
    }
  }

  write(data) {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2), 'utf8');
      return true;
    } catch (err) {
      console.error(`Error writing ${this.filePath}:`, err);
      return false;
    }
  }

  getAll() {
    return this.read();
  }

  findById(id) {
    const all = this.read();
    return all.find(item => item.id === id);
  }

  insert(item) {
    const all = this.read();
    all.unshift(item);
    this.write(all);
    return item;
  }

  update(id, updates) {
    const all = this.read();
    const index = all.findIndex(item => item.id === id);
    if (index === -1) return null;
    all[index] = { ...all[index], ...updates, updatedAt: new Date().toISOString() };
    this.write(all);
    return all[index];
  }

  delete(id) {
    const all = this.read();
    const filtered = all.filter(item => item.id !== id);
    if (filtered.length === all.length) return false;
    this.write(filtered);
    return true;
  }
}

// Stores for our collections
export const productsStore = new JsonStore('products', INITIAL_PRODUCTS);
export const ordersStore = new JsonStore('orders', [
  {
    id: "RVN-928104",
    clientName: "Lord Julian Sterling",
    clientEmail: "j.sterling@mayfair.co.uk",
    address: "14 Grosvenor Square",
    city: "London",
    country: "United Kingdom",
    deliveryMethod: "white-glove",
    tailoringNotes: "Slightly tapered waist; custom cuff length 34.5 in.",
    items: [
      {
        productId: "mens-suit-charcoal",
        name: "Charcoal Wool Bespoke Suit",
        size: "40R",
        price: 2450,
        quantity: 1,
        image: "/assets/menswear-suit.png"
      }
    ],
    subtotal: 2450,
    shippingFee: 0,
    total: 2450,
    status: "in_atelier",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    conciergeAssigned: "Henri Beaumont (Senior Maitre d')"
  }
]);

export const appointmentsStore = new JsonStore('appointments', [
  {
    id: "APT-501238",
    salon: "Paris - Rue du Faubourg Saint-Honoré",
    service: "Bespoke Tailoring Commission (Suits & Outerwear)",
    clientName: "Eleanor Vance",
    clientEmail: "e.vance@private.com",
    status: "confirmed",
    requestedDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
    notes: "Private salon fitting for autumn wardrobe commission.",
    createdAt: new Date(Date.now() - 86400000).toISOString()
  }
]);

export const subscribersStore = new JsonStore('subscribers', [
  {
    id: "SUB-1001",
    email: "vip.collector@geneva.ch",
    subscribedAt: new Date(Date.now() - 86400000 * 7).toISOString(),
    status: "active",
    tier: "Private Salon"
  }
]);

export const inquiriesStore = new JsonStore('inquiries', []);
