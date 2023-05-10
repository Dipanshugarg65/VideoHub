import React from 'react'
import {Box,Button,HStack,Heading,Stack, VStack,Input,Text,} from '@chakra-ui/react'

import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return ( 
  <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'} >
    <Stack direction = {["coloumn","row"]}>
<VStack alignItems={"stretch"} w={"full"} px={'4'}>
    <Heading size="md" textTransform={'uppercase'} textAlign={["center","left"]}> 
        Subscribe for New Updates 
    </Heading>
    <HStack borderBottom = {'2px solid white'} py="2">
        <Input 
        placeholder="Enter Email Here..."
        border={'none'}
        borderRadius="none"
        outline={'none'}
        focusBorderColor="none"/>
        <Button
          p={'0'}
          colorScheme={'purple'}
          variant={'ghost'}
          borderRadius={'0 20px 20px 0'}
        >
            <AiOutlineSend size ={20}/>
        </Button>
    </HStack>
</VStack>
      <VStack
       w={'full'}     
       borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}>

<Heading textTransform={'uppercase'} textAlign={'center'}>
Video game
</Heading>
<Text>All Rights to Pirated Games</Text>
</VStack>
<VStack w={'full'}>
    <Heading size={'md'} textTransform={'uppercase'}>
        Social Networks 
    </Heading>
<Button variant ={"link"} colorScheme={'purple'}>
<a target={'black'} href='https://www.youtube.com/'>
    Youtube
</a>
</Button>
<Button variant ={"link"} colorScheme={'purple'}>
<a target={'black'} href='https://www.instagram.com/ddipanshu65'>
    Instagram
</a>
</Button>
<Button variant ={"link"} colorScheme={'purple'}>
<a target={'black'}href='https://github.com/Dipanshugarg65'>
  GitHub
</a>
</Button>

</VStack>



    </Stack>
 </Box>
  );
};

export default Footer
