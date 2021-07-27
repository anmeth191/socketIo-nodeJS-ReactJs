// const express = require('express');
// const bodyParser = require("body-parser")
// const urlenCodedParser = bodyParser.urlencoded({extended:false});
// const getController = require('./controller/getController');
// const app = express();
// //this module allows to communicate our server side with the client side, thinking that the server side is an API
// const cors = require('cors');
// const postController = require('./controller/postController');

// app.set('view engine' , 'ejs');
// app.use(express.json())


// //app use the cors module and then set the methods you would like to use
// app.use(cors({}))

// //  CORS The default configuration is the equivalent of:

// // // {
// // //   "origin": "*",
// // //   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
// // //   "preflightContinue": false,
// // //   "optionsSuccessStatus": 204
// // // }

// app.use(express.json())
// getController(app);
// postController(app);

// app.listen(8080 , ()=>{ console.log('your server has started using por 8080')});


//use learn and nodejs 

//create the local server in nodeJS using express 

//DEFINE MY OPERATIONS FOR EACH RESOURCE IN THE MODEL

/*
for /home/users
GET
POST
/home/users/:userId
GET
POST

/home/courses
GET
POST
PUT
DELETE

DEFINE THE CONTENT-TYPE IN THE REQUEST OPRATION
headers: {'Content-Type':'application/json'}
by using axios automatically does it  

*/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//cors is a module that allow us to connect react with nodejs
const cors = require('cors');
const getController = require('./controller/getController');
const postController = require('./controller/postController');
const { request } = require('express');
//then you tell the app to use the cors 
app.use(cors({}));
//tell the app to use express json to get json data 
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
//set the view engine to ejs if is needed
app.set('view engine' , 'ejs');
//pass the app as param in the getcontroller controller from the server side
getController(app);
//pass the app as param for the controller in order to do the response from the server side
postController(app);
app.listen(8080 , ()=>{ console.log('your server is running in port 8080')})



