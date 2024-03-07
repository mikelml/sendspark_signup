/* eslint-disable no-undef */
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const router = require("./src/routes.js");
const http = require('http')

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json());
app.use('/', router)
const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Servidor de Node.js corriendo en el puerto ${PORT}`);
});