require("dotenv").config();
const express = require("express");
const server = express();
const { PORT } = process.env;

server.get('/', (req, res) => res.send('vai !'));

server.listen(PORT, () => {
    console.log(`servidor de pé em: http://localhost:${PORT}`);
    console.log('Para desligar o servidor: ctrl + c');
});