import express from 'express';
import {
    getUniversities,
    getUniversityById,
    createUniversity,
    updateUniversity,
    deleteUniversity,
    searchUniversities,
} from '../../controllers/student/universitiesControllers.js';

const router = express.Router();

router.get('/', getUniversities);
router.get('/:id', getUniversityById);
router.get('/search', searchUniversities);
router.post('/', createUniversity);
router.put('/:id', updateUniversity);
router.delete('/:id', deleteUniversity);

export default router;