import React from 'react'
import { Alert, VStack, HStack, Text, IconButton, CloseIcon, Collapse, Box } from 'native-base'

interface Props{
    show: boolean
    children: React.ReactNode
}

const ErrorAlert = (props: Props) =>{

    return(        
        <Box w="100%" mt="4" py="-2">
            <Collapse isOpen={props.show} px={4}>
                    <Alert bg={props.show? "red.600" : "white" }>
                        <VStack space={4} flexShrink={1} w="100%" alignItems="center">
                            <HStack flexShrink={1} space={2} justifyContent="space-between" >
                                <HStack space={2} flexShrink={1}>
                                    <Alert.Icon mt="1" color="white"/>
                                    <Text fontSize="lg" color="white">
                                        {props.children}
                                    </Text>
                                </HStack>                                
                            </HStack>
                        </VStack>
                    </Alert>
            </Collapse>
        </Box>   
    )
}
export default ErrorAlert;