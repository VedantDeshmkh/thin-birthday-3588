import { Input,Box, Stack, NumberInputField,NumberInput, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";




export default function SignIn(){
        const format = (val) => `+` + val
        const parse = (val) => val.replace(/^\$/, '')
        const [value, setValue] = React.useState('91')
    return(
        <>
        <Navbar/>
        
        <Box bg={"white"} w={'40rem'} p={"1rem"} border="2px solid grey" m="Auto" mt={"5rem"}>
            <Box fontSize={"3xl"} p textAlign={"left"} marginBottom={"10px"}>Sign In Page</Box>
            <hr />
        <Stack shouldWrapChildren direction='row' marginTop={"40px"}>
            <NumberInput size='s' maxW={20} defaultValue={91} min={1}
                onChange={(valueString) => setValue(parse(valueString))}
                value={format(value)}
                max={375}>
                <NumberInputField />
                <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
                </NumberInputStepper>
                </NumberInput>
        <Input w={"30rem"} type='number' placeholder="Phone No"/>
        </Stack>
        <br/>
        <Stack shouldWrapChildren direction='row'><Text p={'0.5rem'}>Create Password:</Text><Input w={"15rem"} type='password' placeholder="Password"/></Stack>
        <br/>
        <Link to={'/'}>
        <Input w={"15rem"} bg="red.400" cursor="pointer" type='submit' value={'Sign In'}/></Link>
        </Box>
        
        </>
    )
}