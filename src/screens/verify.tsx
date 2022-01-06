import React, {useState} from 'react'
import {StyleSheet} from 'react-native'
import {VStack, HStack, Center, Text, FormControl, IconButton, Icon} from 'native-base'
import CustomButton from '../components/custom-button'
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { AntDesign } from '@expo/vector-icons';
import { PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
// import { auth } from '../../firebase';

export default function Verify(props){
    const { navigation, route, auth } = props;
    console.log(route);
    const { handleSignupConfirmation } = route.params;

    const [verificationCode, setVerificationCode] = useState('');
    console.log(verificationCode);
    
    const handleSendOTP =()=>{
        try {
            handleSignupConfirmation(verificationCode)
        } catch (error) {
            console.log(error);            
        }
    }
    return(
        <VStack flex={1} bg="white">
            <FormControl px={6}>
                <FormControl.Label py={4} alignItems="center">
                        <IconButton
                        background="white" 
                        variant="solid"                        
                        alignItems="center"
                        justifyContent="center"
                        width={16} height={16}                                                                                                  
                        icon={
                            <Icon
                            as={<AntDesign name="left" color="black"/>}
                            size={10}                                    
                            />
                        }
                        _icon={{
                            color: "purple.700",                                  
                        }}
                        onPress={() => navigation.goBack()}
                        />
                    <Text fontSize="3xl" color="purple.700" bold>OTP Verfication</Text>
                </FormControl.Label>
                <Text fontSize={16} color="dark.500">Enter the OTP sent to <Text color="dark.50">{route.params.phoneNumber}</Text></Text>
                <OTPInputView 
                    pinCount={6} 
                    style={styles.otpView}
                    codeInputFieldStyle={styles.underlineStyleBase}
                    onCodeFilled={value => {
                       setVerificationCode(value)
                    }}
                />
                <Text fontSize={16} color="dark.500">Don't receive the OTP? <Text color="red.600">RESEND OTP</Text></Text>                                                        
            </FormControl>
            <Center justifyContent="flex-end" h="400">
                <CustomButton
                bg="purple.700"
                // isLoading={confirmationLoading}
                loadingText="Verifying OTP"
                loadingBg="purple.600:alpha.70"
                borderRadius="100"
                py={3}
                onPress={handleSendOTP}
                >
                    Verify & Proceed
                </CustomButton>
            </Center>
        </VStack>
    )
}
const styles = StyleSheet.create({ 
  otpView: {
    // width: '100%',
    height: 200,
    color: 'black',
    margin:10,
  },
  underlineStyleBase: {
    width: 50,
    height: 55,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    borderBottomColor: 'gray',
    paddingBottom:20
  },
});