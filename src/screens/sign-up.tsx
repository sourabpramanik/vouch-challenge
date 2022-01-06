import React, {useState} from 'react';
import {VStack, Text, Center, FormControl, Stack, Box} from 'native-base';
import InputField from '../components/input-field';
import CustomButton from '../components/custom-button';
import TextMastHead from '../components/text-masthead';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from "expo-firebase-recaptcha";
import { getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { app, auth } from '../../firebase';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const initialValue = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    phone: '',
    referral: '',
    verificationId: '',
}

export default function SignUpPage(props){
    const { navigation } = props;
    
    // Hooks
    const [formState, setFormState] = useState(initialValue)
    const [loading, setLoading] = useState(false);   

    // Firebase 
    const recaptchaVerifier = React.useRef(null);
    const firebaseConfig = app.length ? app.options : undefined;

    // Functions
    const handleGetOtp = async() =>{        
        try {
            setLoading(true)
            // const phoneProvider = new PhoneAuthProvider(auth);
            // const verificationId = await phoneProvider.verifyPhoneNumber(
            //   formState.phone,
            //   recaptchaVerifier.current
            // );
            // setFormState({...formState, verificationId: verificationId});
            navigation.navigate('VerifyPage', {handleSignupConfirmation});      
            setLoading(false)

        } catch (error) {
            setLoading(false)
            console.log(error);            
        }                
    }
    console.log(formState);
    const handleSignupConfirmation = async(props)=>{
        try {
            // const credential = PhoneAuthProvider.credential(
            //     formState.verificationId,
            //     code
            // );
            // await signInWithCredential(auth, credential);
            console.log(props);
            
        } catch (error) {
            console.log(error);            
        }
    }
    
    return(
        <KeyboardAwareScrollView flex={1} space={2} bg="white">
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
                    isLoading={loading}
                    loadingText="Please wait a moment"
                    loadingBg="purple.700:alpha.70"
                    borderRadius="100" 
                    py={3}                  
                    onPress={handleGetOtp}
                    >
                        Get OTP 
                    </CustomButton>
                </FormControl>                
            </VStack>
        </KeyboardAwareScrollView>
    )
}