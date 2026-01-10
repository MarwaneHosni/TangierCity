import express from 'express';
import {
  getAttractions,
  getAttractionById,
  createAttraction,
  updateAttraction,
  deleteAttraction,
  searchAttractions,
} from '../../controllers/tourism/attractionsControllers.js';

const router = express.Router();

router.get('/', getAttractions);
router.get('/:id', getAttractionById);
router.get('/search', searchAttractions);
router.post('/', createAttraction);
router.put('/:id', updateAttraction);
router.delete('/:id', deleteAttraction);

export default router;
