import express from 'express';
import { pengambilanCreateScheme, pengambilanUpdateScheme } from '../schemes/pengambilan.scheme.js';
import { handleValidate } from '../middlewares/handleValidate.js';
import { getPengambilan, getPengambil, createPengambil, updatePengambil, deletePengambil } from '../controllers/pengambilan.controller.js';

const router = express.Router();

router.get('/pengambilan', getPengambilan);

router.get('/pengambilan/:id', getPengambil);

router.post('/pengambilan', handleValidate(pengambilanCreateScheme), createPengambil);

router.patch('/pengambilan/:id', handleValidate(pengambilanUpdateScheme), updatePengambil);

router.delete('/pengambilan/:id', deletePengambil);

export default router;