import { Router } from 'express';
import {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointmentStatus
} from '../controllers/appointments.controller.js';
import { validateAppointmentPayload } from '../middleware/validator.js';

const router = Router();

router.post('/', validateAppointmentPayload, createAppointment);
router.get('/', getAllAppointments);
router.get('/:id', getAppointmentById);
router.patch('/:id/status', updateAppointmentStatus);

export default router;
