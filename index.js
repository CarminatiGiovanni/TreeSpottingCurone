const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 443;
mongoose.connect(process.env.MONGODB_URI)
    .then(() => app.listen(PORT, () => {
        console.log(`>> Listening at PORT:${PORT}, DB connected`);
    }))
    .catch(err => console.error('>> Error connecting to MongoDB', err));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // res.send('Hello World');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 54.86.60.29:80
// ec2-user
//  kill -9 $(ps aux | grep '\snode\s' | awk '{print $2}')
// sudo su