const express = require('express');
const os = require('os');

const app = express();

app.get('/', (req, res) => {
    console.log('Hello world received a request.');
    const target = process.env.TARGET || 'World';    
    res.send(`Hello ${target}! I am comming from ${os.hostname()}`);
})

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Listening on port ${port}`))
