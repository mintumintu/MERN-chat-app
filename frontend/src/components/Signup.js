import { FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack,Button } from "@chakra-ui/react";
import {React,useState} from "react";

function Signup(){
    const [name,setName]= useState();
    const [email,setEmail]= useState();
    const [password,setPassword]=useState();
    const [show,setShow]= useState(false);
    const handleClick= ()=>setShow(!show);



    return(
    <VStack spacing="5px">
        <FormControl id="first-name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
            placeholder="Enter your name"
            onChange={(e)=>setName(e.target.value)}
            />
        </FormControl>
        <FormControl id="email" isRequired>
            <FormLabel>Email Address</FormLabel>
            <Input 
            type='email'
            placeholder="Enter Your Email Address"
            onChange={(e)=>setEmail(e.target.value)}
            />
        </FormControl>
        <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup size='md'>
                <Input
                type={show?'text':'password'}
                placeholder="Enter Password"
                onChange={(e)=>setPassword(e.target.value)}
                />
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show?"Hide":"Show"}
                </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl>
    </VStack>
        );
}

export default Signup;