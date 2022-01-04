import React from 'react'
import {Input, HStack, FormControl} from 'native-base'

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
        py={2}>
            <FormControl.Label fontSize="lg" color="black">{labelName}</FormControl.Label>
            <Input                        
            w="full"
            {...props}
            fontSize="md"                              
            />
            
        </HStack>                  
    )
}
export default InputField