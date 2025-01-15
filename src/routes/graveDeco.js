import express from 'express';
import {
  getAll,
  getSingle,
  updateFlowerSetting,
  makeNewFlowerSetting,
  deleteFlowerSetting,
} from '../controllers/flowerController.js';

const router = express.Router();

router.get('/flowerSettings', getAll);

router.get('/:id/flowerSetting', getSingle);

router.post('/:id/flowerSetting', makeNewFlowerSetting);

router.put('/:id/flowerSetting', updateFlowerSetting);

router.delete('/:id/flowerSetting', deleteFlowerSetting);

export default router;
