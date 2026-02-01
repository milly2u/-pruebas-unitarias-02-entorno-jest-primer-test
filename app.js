const express = require('express');
const app = express();

const tareas = [
  { id: 1, titulo: 'Aprender Jest' },
  { id: 2, titulo: 'Escribir pruebas unitarias' }
];

app.get('/tareas', (req, res) => {
  res.status(200).json(tareas);
});

module.exports = app;
