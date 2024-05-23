const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Registrar un nuevo producto
router.post('/add', (req, res) => {
  let product = req.body;
  let sql = 'INSERT INTO products SET ?';
  db.query(sql, product, (err, result) => {
    if (err) throw err;
    res.send('Producto añadido...');
  });
});

// Actualizar inventario
router.put('/update/:id', (req, res) => {
  let nuevaCantidad = req.body.cantidad;
  let sql = `UPDATE products SET cantidad = ${nuevaCantidad} WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Producto actualizado...');
  });
});

// Buscar productos
router.get('/search', (req, res) => {
  let sql = 'SELECT * FROM products';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

module.exports = router;
