//Se exporta express
const express = require('express')
const hbs = require('hbs');
require('dotenv').config();

//Se almacena la paquetería express en la variable app
const app = express()
// const port = 8080;
const port = process.env.PORT;


//Uso de handlebars (hbs)
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

//Servir contenido estatico
app.use( express.static( 'public' ) );

//Para usar los recursos de HBS se usa la función reader dentro de app.get como el siguiente en donde colocan las varaibles a cambiar
app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Giovanni Rodriguez',
    titulo: 'Curso de node',
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Giovanni Rodriguez',
    titulo: 'Curso de node',
  });
});


app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Giovanni Rodriguez',
    titulo: 'Curso de node',
  });
});

//Se configura la pagina principal "/" y se envía un mensaje en pantalla 
// app.get('/', (req, res) => {
//   res.send('Home page');
// });

//Se crea una entrada de directorio, esto equiere decir que http://localhost:8080/hola-mundo sería accesible
// app.get('/generic', (req, res) => {
//   res.sendFile( __dirname + '/public/generic.html');
//   });

  // app.get('/elements', (req, res) => {
  //   res.sendFile( __dirname + '/public/elements.html');
  // });

  // Se crea un comodin o default para en caso que el usuario ingrese a una pagina desconocida muestre la siguiente pagina 
  app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
  });
//Se configura el puerto 8080 para la escucha del servidor
app.listen(port, () => {
  console.log(`Aplicación de ejemplo escuchando en el puerto ${port}`);
});