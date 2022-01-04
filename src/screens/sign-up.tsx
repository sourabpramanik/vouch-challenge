import React, {useState} from 'react';
import {VStack, Text, Center, FormControl, Stack, Box} from 'native-base';
import InputField from '../components/input-field';
import CustomButton from '../components/custom-button';
import TextMastHead from '../components/text-masthead';
import AnimatedModal from '../components/animated-modal';

export default function SignUpPage(){
    const [open, setOpen] = useState(false);
    const handleModalOverlay = () =>{
        setOpen(prev => !prev)
    }

    return(
        <VStack flex={1} space={2} bg="white">
            <TextMastHead title="Sign Up!"/>
            <VStack>
                <FormControl isRequired>
                    <InputField
                        placeholder="Enter your first name"
                        type="text"
                        labelName="First Name"
                        borderRadius="10"
                        // value={formState.name}                            
                        // onChangeText={(value) => setFormState({ ...formState, name: value })}
                    />
                    <InputField
                        placeholder="Enter your last name"
                        type="text"
                        labelName="Last Name"
                        borderRadius="10"
                        // value={formState.name}                            
                        // onChangeText={(value) => setFormState({ ...formState, name: value })}
                    />
                    <InputField
                        placeholder="Enter a unique username(max 20 char)"
                        type="text"
                        labelName="Username"
                        borderRadius="10"
                        // value={formState.name}                            
                        // onChangeText={(value) => setFormState({ ...formState, name: value })}
                    />
                    <InputField
                        placeholder="Enter your email id"
                        type="email"
                        labelName="Email"
                        borderRadius="10"
                        // value={formState.email}                            
                        // onChangeText={(value) => setFormState({ ...formState, email: value })}
                    />  
                    <InputField
                        placeholder="For ex: +91 9898989898"
                        type="tel"
                        labelName="Phone Number"
                        borderRadius="10"
                        // value={formState.email}                            
                        // onChangeText={(value) => setFormState({ ...formState, email: value })}
                    />  
                    <InputField
                        placeholder="For ex: NEWUSER"
                        type="text"
                        labelName="Referral Code" 
                        borderRadius="10"
                        // value={formState.password}                            
                        // onChangeText={(value) => setFormState({ ...formState, password: value })}                           
                    />                                                  
                    <CustomButton
                    bg="purple.700"
                    // isLoading={true}
                    loadingText="Please wait a moment"
                    loadingBg="purple.700:alpha.70"
                    borderRadius="100" 
                    py={3}                  
                    onPress={handleModalOverlay}
                    >
                        Get OTP 
                    </CustomButton>
                </FormControl>
                <AnimatedModal
                // formState={formState}
                // setFormState={setFormState}
                open={open}
                handleModalOverlay={handleModalOverlay}
                // handleSignupConfirmation={handleSignupConfirmation}
                // confirmationLoading={confirmationLoading}
                />
            </VStack>
        </VStack>
    )
}