const express = require('express');
const router = express.Router();
const persoCtrl = require('../Controllers/persona.controller');

router.get('/', persoCtrl.getPersonas);

module.exports = router;