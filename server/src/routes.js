const express = require('express');
const { body, validationResult } = require('express-validator');
const axios = require('axios');

const router = express.Router();

router.get('/api/data', async (req, res) => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
});

router.post('/register', [
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

module.exports = router