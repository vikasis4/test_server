const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser());
const server = require('http').createServer(app);


app.post('/pay', (req, res) => {
    console.log(req.body);
    res.json({true:'success'})
})
app.get('/', (req, res) => {
    res.json({ status: 'working' })
})

console.log('Hi');

server.listen(9000, () => {
    console.log('Servr is running on PORT 9000');
})