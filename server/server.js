/* eslint-disable no-undef */
const express = require('express');
const { body, validationResult } = require('express-validator');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.json());

app.get('/api/data', async (req, res) => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
});

app.post('/register', [
    body('firstName').notEmpty(),
    body('lastName').notEmpty(),
    body('company').notEmpty(),
    body('jobTitle').notEmpty(),
    body('email').isEmail(),
    body('password').isLength({ min: 8 })
], (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    res.status(201).json({ data: req.body, message: 'Usuario creado exitosamente' });
});


app.listen(PORT, () => {
    console.log(`Servidor de Node.js corriendo en el puerto ${PORT}`);
});