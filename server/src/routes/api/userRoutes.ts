import { Router } from 'express';
import { getUserProfile, getSavedPacks, savePack } from '../../controllers/userController';
import { authenticateToken } from '../../middleware/auth';

const router = Router();

router.get('/profile', authenticateToken, getUserProfile);
router.get('/packs', authenticateToken, getSavedPacks);
router.post('/packs', authenticateToken, savePack);

export default router;
