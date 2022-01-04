import React from 'react'
import {StyleSheet} from 'react-native'
import {HStack, Modal, Text, FormControl, IconButton, Icon} from 'native-base'
import CustomButton from './custom-button'
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { AntDesign } from '@expo/vector-icons';

const AnimatedModal =(props)=>{
    const {formState, setFormState, open, handleModalOverlay, handleSignupConfirmation, confirmationLoading} = props

    return(
        <Modal isOpen={open} size="100%" onClose={handleModalOverlay}>
            <Modal.Content maxWidth="450" bg="white">
                {/* <Modal.CloseButton color="white"/> */}
                {/* <Modal.Header  bg="purple.700">
                </Modal.Header> */}
                <Modal.Body bg="white">
                    <FormControl>
                        <FormControl.Label py={4} alignItems="center">
                             <IconButton
                                background="white" 
                                variant="solid"                        
                                alignItems="center"
                                justifyContent="center"
                                width={16} height={16}                                                                          
                                borderRadius={100}
                                icon={
                                    <Icon
                                    as={<AntDesign name="left" color="black"/>}
                                    size={10}                                    
                                    />
                                }
                                _icon={{
                                    color: "purple.700",                                  
                                }}
                                onPress={handleModalOverlay}
                              />
                            <Text fontSize="3xl" color="purple.700" bold>OTP Verfication</Text>
                        </FormControl.Label>
                        <Text fontSize={16} color="dark.500">Enter the OTP sent to <Text color="dark.50">+91 9898989898</Text></Text>
                        <OTPInputView 
                            pinCount={4} 
                            style={styles.otpView}
                            codeInputFieldStyle={styles.underlineStyleBase}
                        />
                        <Text fontSize={16} color="dark.500">Don't receive the OTP? <Text color="red.600">RESEND OTP</Text></Text>                        
                    </FormControl>                    
                </Modal.Body>
                <Modal.Footer justifyContent="flex-end" bg="white">
                            <CustomButton
                            bg="purple.700"
                            // isLoading={confirmationLoading}
                            loadingText="Please wait a moment"
                            loadingBg="blue.600:alpha.70"
                            borderRadius="100"
                            py={3}
                            // onPress={handleSignupConfirmation}
                            >
                                Verify & Proceed
                            </CustomButton>                    
                    </Modal.Footer>
            </Modal.Content>
        </Modal>
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
    width: 60,
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

export default AnimatedModal;