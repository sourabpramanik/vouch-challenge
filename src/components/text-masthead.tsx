import React from 'react'
import {VStack, Heading, Box, Text} from 'native-base'

interface Props{
    title: string
}

const TextMastHead = (props: Props) =>{

    return(
        <VStack h="120px" pb={2} bg="white">
            <Box>
                <Heading color="purple.700" pt={10} ml={4} size="3xl">
                    {props.title}
                </Heading>                
            </Box>
        </VStack>   
    )
}
export default TextMastHead;