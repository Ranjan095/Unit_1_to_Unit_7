// Note : import the the mentioned components from chakra UI and remove the follwoing once imported
import { Button, FormControl,Input } from '@chakra-ui/react'
import {useState} from 'react'
import axios from 'axios';

let obj={
  name:'',
  cost:'',
  likes:'',
  description:'',
  breed:''
}

export default function Form() {
let [state,setState]=useState(obj)
  let handleChange=(e)=>{
   setState({...state,[e.target.name]:e.target.value})
    }
    // console.log(state)

    let handleSubmit=(e)=>{
      e.preventDefault()
     axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cats`,state)
     setState(obj)
    
    }

  return (
    <div className="addCatContainer">
      <form className="form" onSubmit={handleSubmit}>
        <FormControl>
          <Input className="name" value={state.name} placeholder="Name" name='name' onChange={handleChange} />
          <Input className="cost" placeholder="Cost" value={state.cost} type="number" name='cost' onChange={handleChange}/>

          <Input className="likes" placeholder="Likes" value={state.likes} type="number" name='likes' onChange={handleChange} />
          <Input className="description" placeholder="Description" value={state.description} name='description' onChange={handleChange}/>
          <Input className="breed" placeholder="Breed" value={state.breed} name='breed' onChange={handleChange}/>
          <Button colorScheme={"green"} className="submitBtn" type='submit'>
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
}
