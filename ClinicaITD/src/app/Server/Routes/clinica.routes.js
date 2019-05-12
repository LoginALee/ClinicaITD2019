const express = require('express');
const router = express.Router();
const persoCtrl = require('../Controllers/persona.controller');

router.get('/', persoCtrl.getPersonas);
router.post('/', persoCtrl.createPersona);
router.get('/:id', persoCtrl.getPersonaUnica);
router.put('/:id', persoCtrl.editPersona);
router.delete('/:id', persoCtrl.deletePersona);



module.exports = router;