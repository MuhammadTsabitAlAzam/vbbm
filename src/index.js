import express from 'express';
import cors from 'cors'; // Import cors package
import app from './app.js';
import { PORT } from './config.js';

const app = express();

// Mengizinkan semua permintaan dari semua domain
app.use(cors());

// ... setup routes dan middleware lainnya ...

app.listen(PORT);
console.log(`Server running on port ${PORT}`);
