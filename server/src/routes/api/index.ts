import { Router } from 'express';
import { packsRouter } from './packsRoutes.js';
import userRouter from './userRoutes.js';

const router = Router();

router.use('/packs', packsRouter);
router.use('/users', userRouter);

export default router;