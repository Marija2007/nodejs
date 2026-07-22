const express = require('express');
const app = express();
const PORT = 3000;

const { getAnalysis, postAnalysis } = require('./controllers/analizaController');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // za da chita podatoci od formular

// GET ruta - go povikuva getAnalysis kontrolerot
app.get('/analiza', getAnalysis);

// POST ruta - istiot url, go povikuva postAnalysis kontrolerot
app.post('/analiza', postAnalysis);

app.listen(PORT, () => {
  console.log(`Serverot rabotuva na http://localhost:${PORT}`);
});