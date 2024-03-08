const express = require('express');
const { body } = require('express-validator');
const axios = require('axios');
const router = express.Router();
const signupScheme = require('../validations/signUpScheme')
const validate = require('../middleware/schemeValidate')

router.get('/', async (req, res) => {
    try {
        res.json({
            test: 'test'
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
});

router.get('/api/data', async (req, res) => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
});

router.post('/register', validate(signupScheme), (req, res) => {
    return res.json({ body: req.body });
});

module.exports = router