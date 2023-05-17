const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log(req.body);
})
app.get('/test', (req, res) => {
    res.json({status:'working'})
})

app.listen(9000, ()=>{
    console.log('Servr is running on PORT 9000');
})