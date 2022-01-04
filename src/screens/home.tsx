import React from 'react';
import { Text, VStack, Input, Icon, useDisclose, Button, Fab, IconButton, Center } from 'native-base';
import MastHead from '../components/masthead';
import InputField from '../components/input-field';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import CustomActionSheet from '../components/action-sheet';

export default function HomeScreen(){
    const { isOpen, onOpen, onClose } = useDisclose()

    return(
        <VStack w="full" flex={1} bg="white">
            <MastHead 
                title="Your Protected Payments" 
                subtitle="We are excied for you to protect your first payment!!" 
                image={require('../assets/masthead-image.png')}
            ></MastHead>
            <VStack space={1}>
                <InputField
                    borderRadius="100"
                    placeholder="Find people who are vouched"
                    px={5}
                    py={3}
                    InputLeftElement={
                        <Icon
                            as={<AntDesign name="search1" />}
                            size={6}
                            ml="6"
                            color="purple.700"
                        />
                    }
                />
                <CustomActionSheet isOpen={isOpen} onClose={onClose}/>
            </VStack>
            <Fab
            position="absolute"
            renderInPortal={false}
            size='sm'
            mt="2"
            w={16}
            h={16}
            placement="top-right"
            // icon={<Icon color="white" as={<AntDesign name="plus"/>} size="sm"/>}
            bg="warmGray.200"  
            label="P"          
            />
            <VStack  h="200px">
                
            </VStack>
            <Center justifyContent="flex-end" h="250">
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
                    as={<Ionicons name="filter-outline" />}
                    size={10}
                    />
                }
                onPress={onOpen}
                />
            </Center>
        </VStack>
    )
}