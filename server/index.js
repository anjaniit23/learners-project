//require
const express = require('express');
const router = require('./router');
const http = require('http');
const cors = require('cors');

//use
const app = express();
app.use(router);
const server = http.createServer(app);


server.listen(process.env.PORT || 5000, () => {
    console.log(`listening to PORT ${5000}`);
});