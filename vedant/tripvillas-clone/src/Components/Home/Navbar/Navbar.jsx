import { Box,HStack, Image, Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    useDisclosure,
    Button,
 } from "@chakra-ui/react";
import { ArrowDownIcon, HamburgerIcon, LockIcon} from '@chakra-ui/icons'
import { Link } from "react-router-dom";

export default function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
        <>
        <Box sx={{ flexGrow: 1 }}>
            <HStack style={{ backgroundColor: "#262626" }} p="0.5rem" position="static" justifyContent={"space-between"}>
            <Link color='teal.500' to={'/'}>
            <Image src='data:image/jpeg;base64,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b4TaV8ItH/Yb+AfwuttL1iPUDrPws8E3Nlqd8yQyRCG4u7q8uJJIv3hbYCvzKprkdT/a9+IN/wDsdab+xHaaFolh4TsvHc3i6+vrC0mXUNW1J7YW0f2mV5mRooYtwiRI0CmaRjuJzQB9V/sWfFT/AIJx/sW/tmeDP20PCf8AwUe+Lep654W8SDUr22uf2dIUbVYZQ6XtvJN/wkJKmeGWaIy7SV8zeASAK9J/4Omv2PfC/wAN/wBsHw9+3Z8FBBefD79obw8mv2epWaZtjqccURuGVh8uJ4ZLW5HOXaeXAO01+Wm5f7p/P/61fVHxZ/4K5/tFfHL/AIJ1+Df+Ca/xV8F+DNX8KeAb2C58L+LLnTbs+ILMQvN5MK3H2ryfLjhne3UeRxCETqocAHzHGQ0ZIKhV5Cs4+c5ycDp0GCSCPl9cV+j3/BC//gs/+1p+zT+0F4E/ZC8Xa9d/EL4QeO/Edh4X1PwL4jY3y6fFezJao1i0gcwiMSE/ZuYZF8wFQzBl+H/2b/2k7v8AZx8Wan4mX4Q+BfHNprOjPpmp+HPiH4c/tGwmheWKUsu2SOaCYPDGRNDJHIPmG7BOfoL4Hf8ABV74Sfsr+NYvjX+zJ/wTJ+EPhn4i2QY6L4p1TWfEWtRaPIwwZbS0vtSdIpRklJGLNGemaAN//g4m/ZD+B37FP/BUDxZ8Lf2dLC307w9qmkWWujw/ZTAw6NPcq/nW0YBJjQshlWM/6tJwgyoUn4TrtPjt8f8A4rftL/FjXfjj8cvGd94j8VeJr77XresajIGedwgRAAAAiogCIo+VEVEUKqgVxdABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/9k=' w={"150px"} alt='Dan Abramov' />
            </Link>

            <HStack p={"5px"} gap="20px">
                <LockIcon color={"White"} cursor="pointer" onClick={onOpen}/>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay>
                        <ModalContent w={"8rem"} ml="500px">
                            <ModalBody >
                            <Link to={'/SignIn'}><Box>Sign In</Box></Link>
                            <Link to={'/Signup'}><Box>Sign up</Box></Link>
                            </ModalBody>
                        </ModalContent>
                    </ModalOverlay>
                </Modal>
                <Button bg={"262626"} color={"white"}>INR<ArrowDownIcon/></Button>
                <HamburgerIcon color={"White"}/>
            </HStack>
            </HStack>
            
        </Box>
        </>
    )
}


