import { FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import {React,useState} from "react";

function Signup(){
    const [name,setName]= useState();



    return(
    <VStack spacing="5px">
        <FormControl id="first-name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
            placeholder="Enter your name"
            onChange={(e)=>setName(e.target.value)}
            />
        </FormControl>
    </VStack>
        );
}

export default Signup;