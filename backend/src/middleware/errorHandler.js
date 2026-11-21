export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    success: false,
    error: {
      message: `Resource not found: ${req.method} ${req.originalUrl}`,
      statusCode: 404,
    },
  });
};

export const errorHandler = (err, req, res, next) => {
  console.error('API Error:', err);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal atelier service error';

  res.status(statusCode).json({
    success: false,
    error: {
      message,
      statusCode,
      details: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    },
  });
};
