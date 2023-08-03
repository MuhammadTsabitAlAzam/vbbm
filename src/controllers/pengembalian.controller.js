import { pool } from '../db/db.js';

export const getPengembalian = async (req, res) => {
 
  try {

    const [rows] = await pool.query('SELECT * FROM pengembalian');

    (rows.length <= 0)
      ? res.status(404).json({ message: 'Data Pengembalian Tidak Ditemukan.' })
      : res.json({ 
          success: true,
          data: rows
        });

  } catch (error) {

    return res.status(500).json({ message: 'SOMETHING GOES WRONG.' });
  }
};


export const getPengembali= async (req, res) => {

  const { id } = req.params;

  try {

    const [rows] = await pool.query('SELECT * FROM pengembalian WHERE id=?', [id]);

    (rows.length <= 0)
      ? res.status(404).json({ message: 'Data Pengembali Tidak Ditemukan.' })
      : res.json({ 
          success: true,
          data: rows
        });

  } catch (error) {

    return res.status(500).json({ message: 'SOMETHING GOES WRONG.' });
  }
};


export const cekPengembali= async (req, res) => {

  const { nama } = req.params;

  try {

    const [rows] = await pool.query('SELECT * FROM pengembalian WHERE nama=?', [nama]);

    (rows.length <= 0)
      ? res.status(404).json({ message: 'Data Pengembali Tidak Ditemukan.' })
      : res.json({ 
          success: true,
          data: rows
        });

  } catch (error) {

    return res.status(500).json({ message: 'SOMETHING GOES WRONG.' });
  }
};


export const createPengembali = async (req, res) => {

  const { nama, bagian, tanggal, dualima, limapuluh, seratus } = req.body;

  try {
    
    const [rows] = await pool.query('INSERT INTO pengembalian (nama, bagian, tanggal, dualima, limapuluh, seratus) VALUES (?, ?, ?, ?, ?, ?)', [nama, bagian, tanggal, dualima, limapuluh, seratus]);

    res.json({ 
      success: true,
      data: { id: rows.insertId, nama, bagian, tanggal, dualima, limapuluh, seratus }
    });

 } catch (error) {
    
    return res.status(500).json({ message: 'SOMETHING GOES WRONG.' });
 }
};


export const updatePengembali = async (req, res) => {

  const { id } = req.params;
  const { nama, bagian, tanggal, dualima, limapuluh, seratus } = req.body;

  try {
    
    const [result] = await pool.query('UPDATE pengembalian SET nama=IFNULL(?, nama), bagian=IFNULL(?, bagian), tanggal=IFNULL(?, tanggal), dualima=IFNULL(?, dualima), limapuluh=IFNULL(?, limapuluh), seratus=IFNULL(?, seratus) WHERE id=?', [nama, bagian, tanggal, dualima, limapuluh, seratus, id]);

    const [rows] = await pool.query('SELECT * FROM pengembalian WHERE id=?', [id]);

    (result.affectedRows <= 0)
      ? res.status(404).json({ message: 'Data Pengembalian Tidak Ditemukan.' })
      : res.json({ 
        success: true,
        data: rows[0]
      });

  } catch (error) {
    
    return res.status(500).json({ message: 'SOMETHING GOES WRONG.' });
  }
};


export const deletePengembali = async (req, res) => {

  const { id } = req.params;

  try {

    const [result] = await pool.query('DELETE FROM pengembalian WHERE id=?', [id]);

    (result.affectedRows <= 0)
      ? res.status(404).json({ message: 'Data Pengembalian Tidak Ditemukan.' })
      : res.json({ success: true });

  } catch (error) {
    
    return res.status(500).json({ message: 'SOMETHING GOES WRONG.' });
  }
};
