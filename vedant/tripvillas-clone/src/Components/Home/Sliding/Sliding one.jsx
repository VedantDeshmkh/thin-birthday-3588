import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack } from "@chakra-ui/react";



export default function SlidingVacation(){
    const destinations=[
        { 
            id:1,
            image:'https://d2vcelvjdj7n25.cloudfront.net/media/collection/goaluxury_272x204.jpg',
            description:'Luxary vacation in Goa'
        },
        { 
            id:2,
            image:'https://d2vcelvjdj7n25.cloudfront.net/media/collection/phuket.jpg',
            description:'Phukets Best Pool Villas'
        },
        { 
            id:3,
            image:'https://d2vcelvjdj7n25.cloudfront.net/media/collection/lonavala.jpg',
            description:'Family Bungalows in Lonavala'
        },
        { 
            id:4,
            image:'https://d2vcelvjdj7n25.cloudfront.net/media/collection/vindhyas-homestay.jpg',
            description:'Coorg Homestays'
        },
        { 
            id:5,
            image:'https://d2vcelvjdj7n25.cloudfront.net/media/collection/beautiful-Bali-Gazebo_1.jpg',
            description:'Bali Family villas'
        },
        { 
            id:6,
            image:'https://d2vcelvjdj7n25.cloudfront.net/media/collection/planters-bungalow.PNG',
            description:'Sakleshpur Affordable Home stays'
        }
        
    ]
   
    // Sliding

    var sliderMain=document.getElementById("Container");
    var item=document.getElementsByClassName("item");

    function next()
    {
        sliderMain.append(item[0]);
    }
    function prev()
    {
        sliderMain.prepend(item[item.length-1])
    }




    return(
        <>
        <Box  w={'90%'} m={'auto'} fontSize='2xl' mt={'1rem'}>
            <Heading textAlign={'left'}>Vacation Ideas</Heading>
            <br/>
            <HStack m={'auto'} color={'black'}>
            <ArrowLeftIcon onClick={prev} h={'150px'} cursor={'pointer'}/>
            <Box style={{display:'flex'}} id="Container">  
            { destinations.map((el)=>(
                
            <Box key={el.id} style={{
               
                margin:'10px',
                width:'100%',
                backgroundImage: `url(${el.image})`,
                backgroundSize: '100% 100%'
            }} className="item">
            <Box color={'white'} fontWeight={'400'} fontSize={'3xl'}>{el.name}</Box>
            <Box color={'white'}>{el.description}</Box>  
            </Box>
            ))
            }
            </Box>
            <ArrowRightIcon onClick={next} cursor={'pointer'} />
            </HStack >
        </Box>
        </>
    )
}