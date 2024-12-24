const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

let server = app.listen(PORT, () => {
    host = server.address().address;
    console.log(`>> Listening at http://${host}:${PORT}`);
});