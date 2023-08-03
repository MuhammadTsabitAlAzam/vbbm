import express from 'express';
import { pengembalianCreateScheme, pengembalianUpdateScheme } from '../schemes/pengembalian.scheme.js';
import { handleValidate } from '../middlewares/handleValidate.js';
import { getPengembalian, getPengembali, createPengembali, updatePengembali, deletePengembali, cekPengembali } from '../controllers/pengembalian.controller.js';

const router = express.Router();

router.get('/pengembalian', getPengembalian);

router.get('/pengembalian/:id', getPengembali);

router.get('/cekpengembalian/:nama', cekPengembali);

router.post('/pengembalian', handleValidate(pengembalianCreateScheme), createPengembali);

router.patch('/pengembalian/:id', handleValidate(pengembalianUpdateScheme), updatePengembali);

router.delete('/pengembalian/:id', deletePengembali);

export default router;