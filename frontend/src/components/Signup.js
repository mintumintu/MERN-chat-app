import { FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack,Button, useToast } from "@chakra-ui/react";
import axios from "axios";
import {React,useState} from "react";
import { useHistory } from "react-router-dom";

function Signup(){

    // states
    const [name,setName]= useState();
    const [email,setEmail]= useState();
    const [password,setPassword]=useState();
    const [show,setShow]= useState(false);
    const [confirmpassword,setConfimpassword]= useState();
    const [pic,setPic]= useState();
    const [picLoading,setPicLoading]= useState(false);

    //imports

    const toast = useToast();
    const history= useHistory();

    
    //functions for handling values
    const handleClick= ()=>setShow(!show);

    const submitHandler= async ()=>{
        setPicLoading(true);
        if(!name || !email || !password || !confirmpassword){
            toast({
                title:"Please fill all the fields",
                status: "Warning",
                duration:5000,
                isClosable:true,
                position:"bottom"
            });
            setPicLoading(false);
            return;
        }

        if(password !== confirmpassword){
            toast({
                title: "Passwords Do not Match",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            });
            return;
        }

        console.log(name,email,password,pic);
        try{
            const config={
                headers:{
                    "Content-type": "application/json",
                },
            };
            const {data}= await axios.post(
                '/api/user',
                {
                    name,
                    email,
                    password,
                    pic,
                },
                config
            );
            console.log(data);
            toast({
                title: "Registration Successful",
                status: "Success",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            })
            setPicLoading(false);
            history.push('/chats');
        }catch(error){
            toast({
                title: "Error Occured!",
                description: error.response.data.message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            });
            setPicLoading(false);
        }
    };

    const postDetails= (pics)=>{
        setPicLoading(true);
        if(pics===undefined){
            toast({
                title:"Please select an Image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            });
            return;
        }
        console.log(pics);
        if(pics.type === "image/jpeg" || pics .type=== "image/png"){
            
        }



    }//end of the postdetails function



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
        <FormControl id='password' isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup size='md'>
                <Input
                type={show?'text':'password'}
                placeholder="Confirm Password"
                onchange={(e)=>setConfimpassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show?"Hide":"Show"}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>
        <FormControl id="pic">
            <FormLabel>Upload your Picture</FormLabel>
            <Input
            type="file"
            p={1.5}
            accept="image/*"
            onChange={(e)=>postDetails(e.target.files[0])}
            />
        </FormControl>
        <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={picLoading}
      >
        Sign Up
      </Button>
    </VStack>
        );
}

export default Signup;