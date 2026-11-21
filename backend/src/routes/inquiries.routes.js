import { Router } from 'express';
import {
  subscribeNewsletter,
  getAllSubscribers,
  submitContactInquiry,
  getAllInquiries
} from '../controllers/inquiries.controller.js';

const router = Router();

router.post('/newsletter', subscribeNewsletter);
router.get('/newsletter', getAllSubscribers);
router.post('/contact', submitContactInquiry);
router.get('/contact', getAllInquiries);

export default router;
