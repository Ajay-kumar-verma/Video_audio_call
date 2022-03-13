import {Box,Center,Stack,HStack,VStack,Spacer,Text,Input,Button} from "@chakra-ui/react";
import {useState} from 'react';

function App() {

const [no, setno] = useState(987654);
const [name, setname] = useState("Unknown"); 


  return(
   <>
    <Box bg="#D3D3D3" w="100%" h="100vh">
     <Center>
     <VStack w="100%" >
       <Center  color="green" bg="white" fontSize={35}   p={5} w="90%"  >Make Video and audio call with us . </Center> 
      
      <Box  bg="white"  p={5} w="90%" >
        <HStack>
         <Box color="blue" fontSize={30}  >Your name is :</Box> 
           <Box color="green" fontSize={30}  contentEditable={true} minW="20%" p={2}>{name}</Box>
         <Spacer/> 

         <Box color="blue" fontSize={30}>Your number is :{no}</Box> 
        </HStack>
      </Box>  

     
      {true?(<Caller />):null}
               <VStack/>
   
       </VStack>
  
     </Center>
     
    </Box>
 

   </>
      );
}

export default App;

const Caller=()=>{
  return(<>
       <HStack  bg="white" h="75vh" p={5}   w="90%" >
       <VStack bg="red" h="75vh" p={1}   w="50%">   
       <Text color="green" fontSize={30}>YOU </Text>
  
        </VStack>
          {/* CAlling part */}
       <Spacer/>
       <VStack bg="red" h="75vh" p={1}   w="50%">  

     <Called />
      </VStack>

      </HStack>

  </>)
 
 }

 const Called=()=>{
  return(<>
      <Text color="green" fontSize={30}>
        Enter Number to make call   
      </Text>   
      <Input color="red" fontSize={30} placeholder="987654"/>
       <HStack>
      <Button fontSize={30} > Audio call </Button>
      <Spacer/>
       <Button fontSize={30}  > Video call </Button>
      </HStack>
  </>)
  }
 
 
 

 
 

