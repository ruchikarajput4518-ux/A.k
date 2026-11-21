import dotenv from 'dotenv';
dotenv.config();

import app from './src/app.js';

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`  R I V E N — Luxury Fashion House REST API`);
  console.log(`  Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`  Server Port: ${PORT}`);
  console.log(`  API Base:    http://localhost:${PORT}/api`);
  console.log(`  Health:      http://localhost:${PORT}/api/health`);
  console.log(`=======================================================`);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => process.exit(0));
});

process.on('SIGINT', () => {
  console.log('SIGINT received. Shutting down gracefully...');
  server.close(() => process.exit(0));
});
