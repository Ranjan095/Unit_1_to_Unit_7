import axios from 'axios';

import {
  Button,
  Checkbox,FormControl,FormLabel,Input
} from '@chakra-ui/react'
import { useState } from 'react';

let initState={
  name:'',
  ownerName:'',
  address:'',
  areaCode:'',
  rent:'',
  bachelor:false,
  married:false
}

export default function Form() {
  let [formData,setFormData]=useState(initState)

  
let handleChange=(e)=>{
let val=e.target.type=='checkbox'? e.target.checked:e.target.value;
let name=e.target.name;
console.log(name,val)
setFormData({...formData,[name]:val})
};



let handleSubmit=(e)=>{
e.preventDefault()
console.log(formData)
axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/houses`,formData)
}

  return (
      <div className = "addHouseContainer" >
        <form className = "form" onSubmit={handleSubmit}>
          <FormControl>
              <Input className = "name" name='name' placeholder = "Name" onChange={handleChange}/>
              <Input className = "ownerName" name='ownerName' placeholder = "Owners name" onChange={handleChange}/>
              <Input className = "address" name='address' placeholder = "Address" onChange={handleChange}/>
              <Input className = "areaCode" name='areaCode' placeholder = "Area code" onChange={handleChange}/>
              <Input className = "rent" name='rent' placeholder = "Rent" onChange={handleChange}/>
              <Checkbox className = "bachelor" name='bachelor' onChange={handleChange}>
                <FormLabel>Married Tenants Allowed</FormLabel>
              </Checkbox>
              <br />
              <Checkbox className = "married" name='married' onChange={handleChange}>
                <FormLabel>Bachelor Tenants Allowed</FormLabel>
              </Checkbox>
              <br />
              <Button type='submit' className = "submitBtn" > Submit</Button>
          </FormControl>
        </form>
      </div>
  )
}

// TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Checkbox = () => <div />;
  // const FormControl = () => <div />;
  // const FormLabel = () => <div />;
  // const Input = () => <div />;
