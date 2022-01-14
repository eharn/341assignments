const http = require('http');
const routes = require('./routes');
const express = require('express');
const app = express();
app.use((req, res, next) => {
    console.log("in the middleware!");
    next(); // allows request to continue to the next middlewere
});

app.use((req, res, next) => {
    console.log("another middleware!");
});

const server = http.createServer(app);
server.listen(3000);
