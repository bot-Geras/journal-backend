import express from 'express';
import { addEntry, getEntries, updateEntry, deleteEntry, getEntriesByCategory } from '../controllers/journalController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

//router.use(authMiddleware);

router.post('/',authMiddleware, addEntry);
router.get('/',authMiddleware, getEntries);
router.get('/category/:category',authMiddleware, getEntriesByCategory);
router.put('/:id',authMiddleware, updateEntry);
router.delete('/:id',authMiddleware, deleteEntry);

export default router;