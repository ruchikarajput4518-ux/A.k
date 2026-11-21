import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import productsRoutes from './routes/products.routes.js';
import ordersRoutes from './routes/orders.routes.js';
import appointmentsRoutes from './routes/appointments.routes.js';
import inquiriesRoutes from './routes/inquiries.routes.js';
import healthRoutes from './routes/health.routes.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';

const app = express();

// CORS configuration for luxury frontend
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, Postman)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, true); // Permissive in dev to avoid friction
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTP logging in dev mode
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));
}

// API Routes
app.use('/api/health', healthRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/appointments', appointmentsRoutes);
app.use('/api/inquiries', inquiriesRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    brand: 'RIVEN',
    atelier: 'Haute Couture & Bespoke Tailoring',
    status: 'Operational',
    version: '1.0.0',
    documentation: '/api/health',
    endpoints: {
      health: '/api/health',
      products: '/api/products',
      orders: '/api/orders',
      appointments: '/api/appointments',
      inquiries: '/api/inquiries/newsletter',
    },
  });
});

// Central Error Handling
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
