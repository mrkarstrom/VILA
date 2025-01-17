import express from 'express';
import {
  getAll,
  getSingle,
  make,
  update,
  remove,
} from '../controllers/decoController.js';

const router = express.Router();

router.get('/', getAll);

router.get('/:id', getSingle);

router.post('/:id', make);

router.put('/:id', update);

router.delete('/:id', remove);

export default router;
