
//create the variable express
const express = require('express');
//variable app
const app = express();  
//require cors
const cors = require('cors');
//require http server
const httpServer = require('http');
const getController = require('./controllers/getController');
const bodyParser = require('body-parser');
//create an server http and give app as parameters
const server = httpServer.createServer(app);
//set my scket io configuration givin the origin my client and the port is going to listen

app.use(express.json());
app.use(cors())
getController(app);
app.listen(8000)



