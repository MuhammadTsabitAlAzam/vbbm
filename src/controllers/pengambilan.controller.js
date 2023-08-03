import { pool } from '../db/db.js';

export const getPengambilan = async (req, res) => {
 
  try {

    const [rows] = await pool.query('SELECT * FROM pengambilan');

    (rows.length <= 0)
      ? res.status(404).json({ message: 'Data Pengambilan Tidak Ditemukan.' })
      : res.json({ 
          success: true,
          data: rows
        });

  } catch (error) {

    return res.status(500).json({ message: 'SOMETHING GOES WRONG.' });
  }
};


export const getPengambil = async (req, res) => {

  const { id } = req.params;

  try {

    const [rows] = await pool.query('SELECT * FROM pengambilan WHERE id=?', [id]);

    (rows.length <= 0)
      ? res.status(404).json({ message: 'Data Pengambil Tidak Ditemukan.' })
      : res.json({ 
          success: true,
          data: rows
        });

  } catch (error) {

    return res.status(500).json({ message: 'SOMETHING GOES WRONG.' });
  }
};


export const createPengambil = async (req, res) => {

  const { nama, bagian, tanggal, dualima, limapuluh, seratus } = req.body;

  try {
    
    const [rows] = await pool.query('INSERT INTO pengambilan (nama, bagian, tanggal, dualima, limapuluh, seratus) VALUES (?, ?, ?, ?, ?, ?)', [nama, bagian, tanggal, dualima, limapuluh, seratus]);

    res.json({ 
      success: true,
      data: { id: rows.insertId, nama, bagian, tanggal, dualima, limapuluh, seratus }
    });

 } catch (error) {
    
    return res.status(500).json({ message: 'SOMETHING GOES WRONG.' });
 }
};


export const updatePengambil = async (req, res) => {

  const { id } = req.params;
  const { nama, bagian, tanggal, dualima, limapuluh, seratus } = req.body;

  try {
    
    const [result] = await pool.query('UPDATE pengambilan SET nama=IFNULL(?, nama), bagian=IFNULL(?, bagian), tanggal=IFNULL(?, tanggal), dualima=IFNULL(?, dualima), limapuluh=IFNULL(?, limapuluh), seratus=IFNULL(?, seratus) WHERE id=?', [nama, bagian, tanggal, dualima, limapuluh, seratus, id]);

    const [rows] = await pool.query('SELECT * FROM pengambilan WHERE id=?', [id]);

    (result.affectedRows <= 0)
      ? res.status(404).json({ message: 'Data Pengambil Tidak Ditemukan.' })
      : res.json({ 
        success: true,
        data: rows[0]
      });

  } catch (error) {
    
    return res.status(500).json({ message: 'SOMETHING GOES WRONG.' });
  }
};


export const deletePengambil = async (req, res) => {

  const { id } = req.params;

  try {

    const [result] = await pool.query('DELETE FROM pengambilan WHERE id=?', [id]);

    (result.affectedRows <= 0)
      ? res.status(404).json({ message: 'Data Pengambil Tidak Ditemukan.' })
      : res.json({ success: true });

  } catch (error) {
    
    return res.status(500).json({ message: 'SOMETHING GOES WRONG.' });
  }
};
