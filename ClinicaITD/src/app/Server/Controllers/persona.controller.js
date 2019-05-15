const persona = require('../Models/persona');
const personaCtrl = {};

personaCtrl.getPersonas = async (req, res) =>{
   const personas = await persona.find();
   res.json(personas);
        
};

personaCtrl.createPersona = async (req, res) =>{
    const p = new persona(req.body);
    await p.save();
    res.json({
        'status' : 'Persona guardada'
    });
    
};

personaCtrl.getPersonaUnica = function(){

};

personaCtrl.editPersona = function(){

};

personaCtrl.deletePersona = function(){

};


module.exports = personaCtrl;