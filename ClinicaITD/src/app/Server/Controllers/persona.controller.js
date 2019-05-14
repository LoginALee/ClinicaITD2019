const persona = require('../Models/persona');
const personaCtrl = {};

personaCtrl.getPersonas = async (req, res) =>{
   const personas = await persona.find();
   res.json(persona);
        
};

personaCtrl.createPersona = async (req, res) =>{
    const persona = new persona(req.body);
    console.log(persona);
    res.json('received');
};

personaCtrl.getPersonaUnica = function(){

};

personaCtrl.editPersona = function(){

};

personaCtrl.deletePersona = function(){

};


module.exports = personaCtrl;