const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/data', async (req, res) => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor de Node.js corriendo en el puerto ${PORT}`);
});