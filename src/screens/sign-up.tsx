import React, {useState, useContext, useCallback} from 'react';
import {VStack, Text, Center, FormControl, Stack, Box} from 'native-base';
import InputField from '../components/input-field';
import CustomButton from '../components/custom-button';
import TextMastHead from '../components/text-masthead';
import UserContext from '../context/user';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from "expo-firebase-recaptcha";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default function SignUpPage(props){
    const { navigation } = props;
    const {
        formState, 
        setFormState, 
        app,
        recaptchaVerifier,
        firebaseConfig,
        verificationProp,
        handleGetOtp,
        sending,
    } = useContext(UserContext);

    const handleNavigation = useCallback(()=>{
        handleGetOtp();
        // if(verificationProp){
        //     navigation.navigate('VerifyPage');        
        // }
    });

    const attemptInvisibleVerification = false; 
    return(
        <VStack flex={1} space={2} bg="white">
            <KeyboardAwareScrollView>
                <TextMastHead title="Sign Up!"/>
                <VStack>
                    <FirebaseRecaptchaVerifierModal
                        ref={recaptchaVerifier}
                        firebaseConfig={app.options}
                        attemptInvisibleVerification
                    />
                    <FormControl isRequired>
                        <InputField
                            placeholder="Enter your first name"
                            type="text"
                            labelName="First Name"
                            borderRadius="10"
                            value={formState.first_name}                            
                            onChangeText={(value) => setFormState({ ...formState, first_name: value })}
                        />
                        <InputField
                            placeholder="Enter your last name"
                            type="text"
                            labelName="Last Name"
                            borderRadius="10"
                            value={formState.last_name}                            
                            onChangeText={(value) => setFormState({ ...formState, last_name: value })}
                        />
                        <InputField
                            placeholder="Enter a unique username(max 20 char)"
                            type="text"
                            labelName="Username"
                            borderRadius="10"
                            value={formState.username}                            
                            onChangeText={(value) => setFormState({ ...formState, username: value })}
                        />
                        <InputField
                            placeholder="Enter your email id"
                            type="email"
                            labelName="Email"
                            borderRadius="10"
                            value={formState.email}                            
                            onChangeText={(value) => setFormState({ ...formState, email: value })}
                        />  
                        <InputField
                            placeholder="For ex: +91 9898989898"
                            type="tel"
                            labelName="Phone Number"
                            keyboardType="phone-pad"
                            borderRadius="10"
                            value={formState.phone}                            
                            onChangeText={(value) => setFormState({ ...formState, phone: value })}
                        />  
                        <InputField
                            placeholder="For ex: NEWUSER"
                            type="text"
                            labelName="Referral Code" 
                            borderRadius="10"
                            value={formState.referral}                            
                            onChangeText={(value) => setFormState({ ...formState, referral: value })}                           
                        />                                                  
                        <CustomButton
                        bg="purple.700"  
                        isLoading={sending}
                        loadingText="Sending OTP"
                        loadingBg="purple.600:alpha.70"                      
                        borderRadius="100" 
                        py={3}                  
                        onPress={handleNavigation}
                        >
                            Get OTP 
                        </CustomButton>
                    </FormControl>                
                </VStack>
            </KeyboardAwareScrollView>
        </VStack>
    )
}