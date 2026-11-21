import { subscribersStore, inquiriesStore } from '../utils/storage.js';
import { isValidEmail } from '../middleware/validator.js';

export const subscribeNewsletter = (req, res) => {
  try {
    const { email, tier = 'Private Salon' } = req.body;

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: { message: 'Please enter a valid confidential email address.' }
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const existing = subscribersStore.getAll().find(s => s.email === normalizedEmail);

    if (existing) {
      return res.status(200).json({
        success: true,
        message: 'Your privilege is already registered in our private salon directory.',
        data: existing
      });
    }

    const subscriber = {
      id: `SUB-${Date.now()}`,
      email: normalizedEmail,
      tier,
      status: 'active',
      subscribedAt: new Date().toISOString()
    };

    subscribersStore.insert(subscriber);

    res.status(201).json({
      success: true,
      message: 'Privilege registered. You will receive private salon invitations and seasonal lookbooks.',
      data: subscriber
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: { message: 'Failed to process salon subscription', details: err.message }
    });
  }
};

export const getAllSubscribers = (req, res) => {
  try {
    const subscribers = subscribersStore.getAll();
    res.json({
      success: true,
      count: subscribers.length,
      data: subscribers
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: { message: 'Failed to retrieve subscriber registry', details: err.message }
    });
  }
};

export const submitContactInquiry = (req, res) => {
  try {
    const { name, email, subject, message, department = 'Client Concierge' } = req.body;

    if (!name || !isValidEmail(email) || !message) {
      return res.status(400).json({
        success: false,
        error: { message: 'Name, valid email, and inquiry message are required.' }
      });
    }

    const inquiry = {
      id: `INQ-${Date.now()}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject ? subject.trim() : 'General Haute Couture Inquiry',
      message: message.trim(),
      department,
      status: 'unresolved',
      createdAt: new Date().toISOString()
    };

    inquiriesStore.insert(inquiry);

    res.status(201).json({
      success: true,
      message: 'Your confidential inquiry has been routed to our senior client concierge.',
      data: inquiry
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: { message: 'Failed to submit inquiry', details: err.message }
    });
  }
};

export const getAllInquiries = (req, res) => {
  try {
    const inquiries = inquiriesStore.getAll();
    res.json({
      success: true,
      count: inquiries.length,
      data: inquiries
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: { message: 'Failed to retrieve inquiries ledger', details: err.message }
    });
  }
};
