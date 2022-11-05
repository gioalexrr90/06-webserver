const http = require('http');

http.createServer( (req, res) => {

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv' );
    // res es la respuesta que nosotros enviamos mediante el servidor
    //el numero 200 indica el tipo de respuesta enviada, el 200 indica que la respuesta es exitosa (se puede ver mas detalles con Postman)
    //Content-Type es el tipo de despliegue que se le quiere dar en el servidor según la respuesta, text/plain es formato de solo texto, application/json es formato JSON
    // res.writeHead(200, { 'Content-Type': 'test/plain'})

    //Se crea un objeto como ejemplo
    // const persona = {
    //     id: 1,
    //     nombre: 'Gio'
    // }
    // res.write(JSON.stringify(persona));
    res.write('Hola mundo!');

    res.end();
})
.listen( 8080 );

console.log('Escuchando al puerto: ', 8080);
