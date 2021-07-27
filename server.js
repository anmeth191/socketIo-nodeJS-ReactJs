// const express = require('express');
// const getController = require('./controllers/getController');
// const cors = require('cors');
// const app = express();
// //create a server app
// const server = require('http').createServer(app);

// //require socket.io
// const socketIo = require('socket.io')(server , {
//     cors:{ 
//         origin: "http://localhost:3000/#/",
//         methods:["GET","POST"]
//     }

// });
// //const io = socketIo(server);
// app.set('view engine' , 'ejs');
// app.use(express.json());

// app.use(cors({ origin:' * '}));
// getController(app);

// app.listen( 8080 , ()=>{ console.log('listenning port 8080')});

// //in order to use socket io you must declare the variable server
// socketIo.on("connection" , (socket)=>{
//     console.log(socket.id);
// })

//create the variable express
const express = require('express');
//variable app
const app = express();  
//require cors
const cors = require('cors');
//require http server
const httpServer = require('http');
//create an server http and give app as parameters
const server = httpServer.createServer(app);
//set my scket io configuration givin the origin my client and the port is going to listen
const socketIo = require('socket.io')(8080 , { cors:{
    origin:['http://localhost:3000'],
    methods:["GET" , "POST"]
}})

app.use(express.json());
app.use(cors())

//use my socket io in with on we listen to a connection and rthen we send a response 
socketIo.on('connection' , socket =>{
    console.log(socket.id);

    socket.on('message', (message) =>{
        console.log(message)
//with the socketIo variable and the emit we send a message to the client and it can render in real time without refreshing the component
        socketIo.emit('response', message)
    })
})

app.get('/' , (request , response) =>{
    response.send('<h1>Hello from the server side</h1>')
})

app.listen(8000)



// const socketIo = require('socket.io')(8080 , {cors:{
//     origin: ['http://localhost:3000']
// }});
// //app.use(cors({ origin:' http://localhost:3000/#/ ' , methods:["GET" , "POST"]}));
// // app.listen(8080 , ()=>{
// //     console.log('listening in port 8080')
// // })

// socketIo.on("connection" , (socket)=>{ 

//    socket.on('message' , (message)=>{
//     socketIo.emit('receive-message' , message) 
//    })

// })