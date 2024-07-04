import { Router } from 'express';
import { addEntry, getEntries, updateEntry, deleteEntry } from '../controllers/journalController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

router.use(authMiddleware);

router.post('/', addEntry);
router.get('/', getEntries);
router.put('/:id', updateEntry);
router.delete('/:id', deleteEntry);

export default router;