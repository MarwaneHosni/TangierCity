import express from 'express';
import {
  getAtms,
  getAtmById,
  createAtm,
  updateAtm,
  deleteAtm,
  searchAtms,
} from '../../controllers/tourism/atmsControllers.js';

const router = express.Router();

router.get('/', getAtms);
router.get('/:id', getAtmById);
router.get('/search', searchAtms);
router.post('/', createAtm);
router.put('/:id', updateAtm);
router.delete('/:id', deleteAtm);

export default router;
