import React from 'react';
import {Actionsheet, Icon, Text, VStack, Box, IconButton, HStack, Image} from 'native-base';
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import CustomButton from './custom-button';

interface Props {
    isOpen: boolean
    onClose?: ()=> void
}

export default function CustomActionSheet(props: Props){

    const {isOpen, onClose} = props;
    return(
        <Actionsheet isOpen={isOpen} size="full" onClose={onClose}>
            <Actionsheet.Content>
                <VStack  w="full" px={10}>
                  <Box w="full" py={2}>
                    <Text color="warmGray.700" fontSize="lg" bold>Recent</Text>
                  </Box>
                  <HStack py={4} space={6}>
                    <Box mb={2} alignItems="center">
                         <IconButton 
                            background="purple.700" 
                            variant="solid"                        
                            alignItems="center"
                            justifyContent="center"
                            width={16} height={16}
                            mb={2}
                            borderRadius={100}
                            icon={
                                <Icon
                                as={<Ionicons name="notifications" />}
                                size={8}
                                />
                            }
                            onPress={()=>console.log('Notification')}
                        />     
                        <Text textAlign="center">All</Text>                                   
                        <Text textAlign="center">Notifications</Text>                                   
                    </Box>
                    <Box mb={2} alignItems="center">
                         <IconButton 
                            background="purple.700" 
                            variant="solid"                        
                            alignItems="center"
                            justifyContent="center"
                            width={16} height={16}                            
                            mb={2}
                            borderRadius={100}
                            icon={
                                <Icon
                                as={<MaterialCommunityIcons name="account-group" />}
                                size={10}
                                />
                            }
                            onPress={()=>console.log('Users')}
                        />     
                        <Text textAlign="center">Who is</Text>                                   
                        <Text textAlign="center">using</Text>                                   
                    </Box>   
                    <Box mb={2} alignItems="center">
                         <IconButton 
                            background="purple.700" 
                            variant="solid"                        
                            alignItems="center"
                            justifyContent="center"
                            width={16} height={16}                            
                            mb={2}
                            borderRadius={100}
                            icon={
                                <Icon
                                as={<Ionicons name="chatbubbles" />}
                                size={10}
                                />
                            }
                            onPress={()=>console.log('Bot')}
                        />     
                        <Text textAlign="center">Help Bot</Text>                                   
                    </Box>                   
                  </HStack>
                  <VStack w="full" mt="32" mb="10">
                    <CustomButton
                        leftIcon={<Icon as={Ionicons} name="add-outline" size="md" ml="-6"/>}
                        bg="purple.700"
                        borderRadius="100"
                    >
                        New Payments
                    </CustomButton>
                  </VStack>
                </VStack>
            </Actionsheet.Content>            
        </Actionsheet>
    )
}

