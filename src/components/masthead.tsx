import React from 'react';
import { VStack, Box, Heading, Image, Center, Text } from 'native-base';

interface Props{
    title: string
    subtitle: string
    image: ImageSourcePropType
    children: React.ReactNode
};

export default function MastHead(props: Props){
    const { title, image, children, subtitle} = props;

    return(
        <VStack h="300px" pb={5}>
            <Image position="absolute" left={0} right={0} bottom={-5} w="full" h="300px" resizeMode="cover" source={image} alt="masthead image"/>
            {children}
            <Box flex={1}/>
            <Center w="full">
                <Text color="purple.700" px={2} mb="4" fontSize="3xl" bold>
                    {title}
                </Text>
                <Text color="warmGray.500" px="16" mb="3" fontSize="lg" textAlign="center">
                    {subtitle}
                </Text>
            </Center>
            {/* <Heading color=""></Heading> */}
        </VStack>
    )
};