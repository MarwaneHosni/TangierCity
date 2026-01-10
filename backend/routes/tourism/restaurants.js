import express from 'express';
import {
  getRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  searchRestaurants,
} from '../../controllers/tourism/restaurantControllers.js';

const router = express.Router();

router.get('/', getRestaurants);
router.get('/:id', getRestaurantById);
router.get('/search', searchRestaurants);
router.post('/', createRestaurant);
router.put('/:id', updateRestaurant);
router.delete('/:id', deleteRestaurant);

export default router;
