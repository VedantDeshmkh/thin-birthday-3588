import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack } from "@chakra-ui/react";



export default function Sliding(){
    const destinations=[
        { 
            id:1,
            image:'https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/goa-11.f1c86735cec4.jpg',
            name: 'Goa',
            description:'Vacation Rentals'
        },
        { 
            id:2,
            image:'https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/galle-27739.4e9874b7f375.jpg',
            name: 'Galle',
            description:'Vacation Rentals'
        },
        { 
            id:3,
            image:'https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/phuket-72.9d6f9e3883be.jpg',
            name: 'Phuket',
            description:'Vacation Rentals'
        },
        { 
            id:4,
            image:'https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/kandy-5144.2adb0839ea6a.jpg',
            name: 'Kandy',
            description:'Vacation Rentals'
        },
        { 
            id:5,
            image:'https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/koh-samui-5119.82e8a6c9cf8b.jpg',
            name: 'Koh Samui',
            description:'Vacation Rentals'
        },
        { 
            id:6,
            image:'https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/home-small/lonavala-2293.ab3b797cddf6.jpg',
            name: 'Lonawala',
            description:'Vacation Rentals'
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
        <Box  w={'90%'} m={'auto'} fontSize='2xl' mt={'14rem'}>
            <Heading textAlign={'left'}>Top Destinations</Heading>
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
            <Box color={'white'} fontWeight={'700'} fontSize={'2xl'}>{el.name}</Box>
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