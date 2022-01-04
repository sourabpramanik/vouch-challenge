import React from 'react'
import {Input, HStack, FormControl, Text} from 'native-base'

interface Props{
    labelName: string
    placeholder: string
    fieldType: string
    value: string
    onChange?: () => void    
}

const InputField = (props: Props)=>{
    const {labelName, value, placeholder,fieldType, onChange} = props
    return(
                
        <HStack 
        alignItems="flex-start"
        justifyContent="center" 
        flexDirection="column"        
        w="full" 
        px={4} 
        py={3}>
            <Text fontSize="lg" color="dark.300" px="2" mb={1}>{labelName}</Text>
            <Input                        
            w="full"
            {...props}
            px="4"
            fontSize="md"                              
            />
            
        </HStack>                  
    )
}
export default InputField