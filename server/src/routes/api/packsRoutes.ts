import { Router } from 'express';
const router = Router();

import { getAllPacks, createPack, deletePack } from '../../controllers/packsController';

router.route('/').get(getAllPacks).post(createPack)

router.route('/:packId').delete(deletePack)

export {router as packsRouter}