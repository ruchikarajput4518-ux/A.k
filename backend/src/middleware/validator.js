export const isValidEmail = (email) => {
  if (!email || typeof email !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
};

export const validateOrderPayload = (req, res, next) => {
  const { name, email, items } = req.body;

  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({
      success: false,
      error: { message: 'Client name is required.' },
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      error: { message: 'A valid email address is required.' },
    });
  }

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
      success: false,
      error: { message: 'Order must contain at least one item.' },
    });
  }

  next();
};

export const validateAppointmentPayload = (req, res, next) => {
  const { name, email, salon, service } = req.body;

  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({
      success: false,
      error: { message: 'Client name is required.' },
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      error: { message: 'A valid confidential email is required.' },
    });
  }

  if (!salon || !service) {
    return res.status(400).json({
      success: false,
      error: { message: 'Atelier salon location and discipline of interest are required.' },
    });
  }

  next();
};
