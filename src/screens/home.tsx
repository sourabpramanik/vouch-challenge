import React from 'react';
import { Text, VStack, Input } from 'native-base';
import MastHead from '../components/masthead';

export default function HomeScreen(){
    return(
        <VStack w="full" flex={1} bg="warmGray.50">
            <MastHead 
                title="Your Protected Payments" 
                subtitle="We are excied for you to protect your first payment!!" 
                image={require('../assets/masthead-image.png')}
            ></MastHead>
        </VStack>
    )
}