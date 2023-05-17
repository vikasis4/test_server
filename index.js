const express = require('express');

const app = express();

app.get('/pay', (req, res) => {
    console.log(req.body);
})
app.get('/', (req, res) => {
    res.json({ status: 'working' })
})
console.log('Hi');
app.listen(9000, () => {
    console.log('Servr is running on PORT 9000');
})