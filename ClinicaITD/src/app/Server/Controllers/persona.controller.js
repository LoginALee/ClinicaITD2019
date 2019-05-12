const personaCtrl = {};

personaCtrl.getPersonas =  (req, res) =>{
    res.json({
        status: 'Personas van aqui'
    });
};


module.exports = personaCtrl;