import { Router } from 'express';

const router = Router();

const startTime = Date.now();

router.get('/', (req, res) => {
  const uptimeSeconds = Math.floor((Date.now() - startTime) / 1000);

  res.json({
    success: true,
    brand: 'RIVEN Luxury Fashion House',
    service: 'Bespoke Atelier Backend API',
    status: 'HEALTHY',
    timestamp: new Date().toISOString(),
    uptime: `${uptimeSeconds}s`,
    environment: process.env.NODE_ENV || 'development',
    version: '1.0.0',
    memoryUsage: process.memoryUsage(),
    endpoints: {
      products: '/api/products',
      orders: '/api/orders',
      appointments: '/api/appointments',
      newsletter: '/api/inquiries/newsletter',
      contact: '/api/inquiries/contact',
      metadata: '/api/products/meta/categories'
    }
  });
});

export default router;
