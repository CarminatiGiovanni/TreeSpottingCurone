const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 443;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // res.send('Hello World');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`>> Listening at PORT:${PORT}`);
});

// 54.86.60.29:80
// ec2-user
//  kill -9 $(ps aux | grep '\snode\s' | awk '{print $2}')
// sudo su