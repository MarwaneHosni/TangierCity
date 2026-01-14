import express from 'express';
import {
  getHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel,
  searchHotels,
} from '../../controllers/tourism/hotelsControllers.js';
import authenticate from '../../middleware/auth.middleware.js';
import { isAdmin } from '../../middleware/role.middleware.js';

const router = express.Router();

router.get('/', getHotels);
router.get('/search', searchHotels);
router.get('/:id', getHotelById);
router.post('/', authenticate, isAdmin, createHotel);
router.put('/:id', authenticate, isAdmin, updateHotel);
router.delete('/:id', authenticate, isAdmin, deleteHotel);

export default router;
