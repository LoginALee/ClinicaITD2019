const express = requiere('express')
//const morgan = requiere('morgan')
const app = express()

//Settings
app.set('port', process.env.PORT || 3000);
//Middewares
//app.use(morgan('dev'));
//Routes

//Starting the server

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(app.get('port'), () =>{
     console.log('Example app listening on port', app.get('port'));
});
