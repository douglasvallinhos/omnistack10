const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://douglasmv:20mata@cluster0-shard-00-00-9lg84.mongodb.net:27017,cluster0-shard-00-01-9lg84.mongodb.net:27017,cluster0-shard-00-02-9lg84.mongodb.net:27017/bd_banco?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);