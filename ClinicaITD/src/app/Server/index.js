const express = require('express')
const app = express()
const morgan = require('morgan')

const { mongoose } = require('./Database');
//Settings
app.set('port', process.env.PORT || 3000);
//Middewares
app.use(morgan('dev'));
app.use(express.json());
//Routes
app.use('/Api/Clinica',require('./routes/clinica.routes'));
//Starting the server

//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(app.get('port'), () =>{
     console.log('Example app listening on port', app.get('port'));
});
