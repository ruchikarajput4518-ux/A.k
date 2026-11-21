import { appointmentsStore } from '../utils/storage.js';

export const createAppointment = (req, res) => {
  try {
    const { salon, service, name, email, requestedDate, notes } = req.body;

    const appointmentId = `APT-${Math.floor(100000 + Math.random() * 900000)}`;

    const newAppointment = {
      id: appointmentId,
      salon: salon || 'Paris - Rue du Faubourg Saint-Honoré',
      service: service || 'Bespoke Tailoring Commission',
      clientName: name.trim(),
      clientEmail: email.trim().toLowerCase(),
      requestedDate: requestedDate || new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
      notes: notes ? notes.trim() : 'Requested private fitting consultation.',
      status: 'pending_review',
      assignedMaitreD: 'Alexandre Laurent (Director of Client Services)',
      createdAt: new Date().toISOString()
    };

    appointmentsStore.insert(newAppointment);

    res.status(201).json({
      success: true,
      message: `Appointment requested for ${newAppointment.clientName} at ${newAppointment.salon}. Our senior maitre d' will reach out within 24 hours.`,
      data: newAppointment
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: { message: 'Failed to schedule atelier appointment', details: err.message }
    });
  }
};

export const getAllAppointments = (req, res) => {
  try {
    let appointments = appointmentsStore.getAll();
    const { salon, status, email } = req.query;

    if (salon) {
      appointments = appointments.filter(a => a.salon.toLowerCase().includes(salon.toLowerCase()));
    }
    if (status) {
      appointments = appointments.filter(a => a.status === status);
    }
    if (email) {
      appointments = appointments.filter(a => a.clientEmail.toLowerCase() === email.toLowerCase());
    }

    res.json({
      success: true,
      count: appointments.length,
      data: appointments
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: { message: 'Failed to retrieve appointments ledger', details: err.message }
    });
  }
};

export const getAppointmentById = (req, res) => {
  try {
    const { id } = req.params;
    const appointment = appointmentsStore.findById(id);

    if (!appointment) {
      return res.status(404).json({
        success: false,
        error: { message: `Appointment '${id}' not found.` }
      });
    }

    res.json({
      success: true,
      data: appointment
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: { message: 'Error retrieving appointment', details: err.message }
    });
  }
};

export const updateAppointmentStatus = (req, res) => {
  try {
    const { id } = req.params;
    const { status, scheduledTime, assignedMaitreD } = req.body;

    const validStatuses = ['pending_review', 'confirmed', 'rescheduled', 'completed', 'cancelled'];
    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        error: { message: `Invalid status. Valid statuses: ${validStatuses.join(', ')}` }
      });
    }

    const updates = {};
    if (status) updates.status = status;
    if (scheduledTime) updates.scheduledTime = scheduledTime;
    if (assignedMaitreD) updates.assignedMaitreD = assignedMaitreD;

    const updated = appointmentsStore.update(id, updates);
    if (!updated) {
      return res.status(404).json({
        success: false,
        error: { message: `Appointment '${id}' not found.` }
      });
    }

    res.json({
      success: true,
      message: 'Appointment status updated.',
      data: updated
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: { message: 'Failed to update appointment', details: err.message }
    });
  }
};
