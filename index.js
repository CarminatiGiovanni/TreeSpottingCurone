const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const Tree = require('./schema/treeSchema');

const app = express();

const PORT = process.env.PORT || 443;
mongoose.connect(process.env.MONGODB_URI)
    .then(() => app.listen(PORT, () => {
        console.log(`>> Listening at PORT:${PORT}, DB connected`);
    }))
    .catch(err => console.error('>> Error connecting to MongoDB', err));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    // res.send('Hello World');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/add_tree', (req, res) => {
    const tree = new Tree(req.body);
    tree.save()
        .then(() => res.send('Tree added'))
        .catch(err => res.send(err));
});

app.post('/add_pod', (req, res) => {
    const pod = new Pod(req.body);
    pod.save()
        .then(() => res.send('Pod added'))
        .catch(err => res.send(err));
}); 

app.post('/add_ruin', (req, res) => {
    const ruin = new Ruin(req.body);
    ruin.save()
        .then(() => res.send('Ruin added'))
        .catch(err => res.send(err));
});

// 54.86.60.29:80
// ec2-user
//  kill -9 $(ps aux | grep '\snode\s' | awk '{print $2}')
// sudo su