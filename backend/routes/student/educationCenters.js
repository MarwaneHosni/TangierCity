import express from 'express';
import {
    getLibraries,
    getLibraryById,
    createLibrary,
    updateLibrary,
    deleteLibrary,
    searchLibraries,
} from '../../controllers/student/librariesControllers.js';

const router = express.Router();

router.get('/', getLibraries);
router.get('/:id', getLibraryById);
router.get('/search', searchLibraries);
router.post('/', createLibrary);
router.put('/:id', updateLibrary);
router.delete('/:id', deleteLibrary);

export default router;