const express = require('express');
const spdy = require('spdy')
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const app = express();
const port = 3000;
const spdyPort = 3001;
const server = spdy.createServer({}, app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Serve the API documentation using Swagger UI
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Define your API routes
app.get('/testGet', (req, res) => {
  res.status(200).send('GET request successful');
  console.log('Sent 200');
});

app.post('/testPost', (req, res) => {
  res.status(201).send('POST request successful');
  console.log('Sent 201');
});

app.put('/testPut', (req, res) => {
  res.status(204).send('PUT request successful');
  console.log('Sent 204');
});

app.patch('/testPatch', (req, res) => {
  res.status(304).send('PATCH request successful');
  console.log('Sent 304');
});

app.delete('/testDelete', (req, res) => {
  res.status(400).send('DELETE request successful');
  console.log('Sent 400');
});

app.get('/test401', (req, res) => {
  res.status(401).send('Unauthorized');
  console.log('Sent 401');
});

app.get('/test403', (req, res) => {
  res.status(403).send('Forbidden');
  console.log('Sent 403');
});

app.get('/test404', (req, res) => {
  res.status(404).send('Not Found');
  console.log('Sent 404');
});

app.get('/test405', (req, res) => {
  res.status(405).send('Method Not Allowed');
  console.log('Sent 405');
});

app.get('/test418', (req, res) => {
  res.status(418).send('I’m a teapot');
  console.log('Sent 418');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

server.listen(spdyPort, () => {
  console.log(`HTTP2 Server running on port ${spdyPort} with ssl`);
});



/*

 __  __           _        ____          _____                           
|  \/  | __ _  __| | ___  | __ ) _   _  |  ___|   _ _ __ ___   ___  __ _ 
| |\/| |/ _` |/ _` |/ _ \ |  _ \| | | | | |_ | | | | '_ ` _ \ / _ \/ _` |
| |  | | (_| | (_| |  __/ | |_) | |_| | |  _|| |_| | | | | | |  __/ (_| |
|_|  |_|\__,_|\__,_|\___| |____/ \__, | |_|   \__,_|_| |_| |_|\___|\__,_|
                                 |___/                                   

 */