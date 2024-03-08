const express = require('express');
const { body } = require('express-validator');
const axios = require('axios');
const router = express.Router();
const signupScheme = require('../validations/signUpScheme')

const validate = (schema) => async (req, res, next) => {
    try {
        await schema.validate({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        return next();
    } catch (err) {
        return res.status(500).json({ type: err.name, message: err.message });
    }
};

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