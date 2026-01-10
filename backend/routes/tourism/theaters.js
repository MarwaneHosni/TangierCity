import express from 'express';
import {
  getTheaters,
  getTheaterById,
  createTheater,
  updateTheater,
  deleteTheater,
  searchTheaters,
} from '../../controllers/tourism/theatersControllers.js';

const router = express.Router();

router.get('/', getTheaters);
router.get('/:id', getTheaterById);
router.get('/search', searchTheaters);
router.post('/', createTheater);
router.put('/:id', updateTheater);
router.delete('/:id', deleteTheater);

export default router;
