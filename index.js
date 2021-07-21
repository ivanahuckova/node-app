const express = require('express');
const os = require('os');

const app = express();

app.get('/', (req, res) => {
    res.send(`Hell from ${os.hostname()}`);
})

const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`))