// import React from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { io } from 'socket.io-client';


// class DisplayCategory extends React.Component{

//     constructor(props){
//         super(props);
//          this.state = {
//          categories:[],
//          socket: io('http://localhost:8080')
//          }
      
//       }

//       componentDidMount(){
//         this.getCategories();
//       }
      
//       getCategories = async ()=>{
//       await axios.get('http://127.0.0.1:8080/').then((response)=>{
//         this.setState({categories:response.data.body} , ()=>{ return this.state.categories});
//       }).catch((error)=>{
//         console.log(error)
//       })
      
//       //connect our socket to our local server 


//     }
  

   
      
//       render(){
//       return(
//         <div>
//       {
//             this.state.categories.map( element  =>{
//               return(
//                  <div key={element.id}>
                 
//                 <Link to={`/items/${element.id}`}>{element.categoryName}</Link>
//                   </div>
//                 )
//             })
//           }
        
//           </div>
//       )
      
//       }

// }

// export default DisplayCategory;

import React from 'react';

//import io in the clinet side this is the methid to use
import { io }  from 'socket.io-client';
class DisplayCategory extends React.Component{

  //assing in the vatiable socket the address we want as server 
state = {
 socket:io('http://127.0.0.1:8080/'),
  text:'',
  response:''
}

handleSubmit = (event)=>{
  event.preventDefault();
  this.state.socket.emit('message' , this.state.text);
  this.state.socket.on('response' , (message) =>{
    this.setState({response:message})
  })
}

changeHandler = (event)=>{
  this.setState({ [event.target.name]: event.target.value } , ()=>{ return this.state.text})
}


render(){

  return(
    <div>
      <h1>{ this.state.response}</h1>
      <form onSubmit={ this.handleSubmit }>
        <input type="text" name="text" className="name" onChange={ this.changeHandler} />
        <button type="submit">Send</button>
      </form>
      </div>
  )

}

  
}


export default DisplayCategory;