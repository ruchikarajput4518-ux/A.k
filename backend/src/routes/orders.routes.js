import { Router } from 'express';
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus
} from '../controllers/orders.controller.js';
import { validateOrderPayload } from '../middleware/validator.js';

const router = Router();

router.post('/', validateOrderPayload, createOrder);
router.get('/', getAllOrders);
router.get('/:id', getOrderById);
router.patch('/:id/status', updateOrderStatus);

export default router;
