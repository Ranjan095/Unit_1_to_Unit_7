import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Checkbox
} from '@chakra-ui/react'



export default function Form() {


  

  return (
      <div className = "addHouseContainer" >
        <form className = "form" >
          <FormControl>
              <Input className = "name" placeholder = "Name" />
              <Input className = "ownerName" placeholder = "Owners name" />
              <Input className = "address" placeholder = "Address" />
              <Input className = "areaCode" placeholder = "Area code" />
              <Input className = "rent" placeholder = "Rent" />
              <Checkbox className = "bachelor" >
                <FormLabel>Married Tenants Allowed</FormLabel>
              </Checkbox>
              <br />
              <Checkbox className = "married" >
                <FormLabel>Bachelor Tenants Allowed</FormLabel>
              </Checkbox>
              <br />
              <Button className = "submitBtn" > Submit</Button>
          </FormControl>
        </form>
      </div>
  )
}
