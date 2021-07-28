
// export default DisplayCategory;

import React from 'react';
import axios from 'axios';
//import io in the client side this is the method to use
import { io }  from 'socket.io-client';
class DisplayCategory extends React.Component{

  //assing in the vatiable socket the address we want as server 
state = {
 socket:io('http://127.0.0.1:8080/'),
  text:'',
  response:'',
  data:[]
}
getCategories = async ()=>{
 await axios.get('http://127.0.0.1:8000/')
   this.state.socket.on('category-response' , (data)=>{
    //this.setState({data:data} , ()=>{ return this.state.data})
    console.log(data);
  })
}

postCategory = async (category)=>{
await axios.post('http://127.0.0.1:8000/',{
  data: category 
})
   
this.state.socket.on('category-added' , (data)=>{
  console.log(data);
 })

}

componentDidMount(){this.getCategories();}
handleSubmit = (event)=>{ 
  event.preventDefault();
  this.postCategory(this.state.text);

   

}



changeHandler = (event)=>{
this.setState({ [event.target.name]: event.target.value } , ()=>{ return this.state.text})
}

render(){

  return(
    <div>
      <h1>Add a new Category</h1>
      <h1>{ this.state.response}</h1>
      <form onSubmit={ this.handleSubmit }>
        <input type="text" name="text" className="name" onChange={ this.changeHandler} />
        <button type="submit">Send</button>
      </form>
      
      <div>
        { this.state.data.map( element =>{
          return(
            <h1 key={element.id}>{element.categoryName}</h1>
          )
        })}
        </div>

      </div>



  )

}

  
}


export default DisplayCategory;