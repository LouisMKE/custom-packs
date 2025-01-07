import { Router } from 'express';
const router = Router();

import { getUserProfile, updateUserProfile } from '../../controllers/userController';
import { registerUser, loginUser } from '../../controllers/authController';

import { authenticateToken } from '../../middleware/auth';

router.route('/').post(registerUser).put(authenticateToken)

router.route('/:userId').get(getUserProfile).post(updateUserProfile)

router.route('/login').post(loginUser)

export {router as userRouter};