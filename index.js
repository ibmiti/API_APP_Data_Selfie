// Represents the server

const express = require('express');
const app     = express();
app.listen(3001, () => console.log('listening at 3001'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb'}));
app.post('/api', (request, response) => {
    console.log('ello I received a request');
    console.log(request);
});