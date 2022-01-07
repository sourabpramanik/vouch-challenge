import React, {useState, useEffect, useCallback} from 'react';
import { PhoneAuthProvider, signInWithCredential, signInWithPhoneNumber } from 'firebase/auth';
import { app, auth, db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';

// context API
const UserContext = React.createContext();

// values
const initialValue = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    phone: '',
    referral: '',    
};


const UserProvider = (props) =>{
    // hooks    
    const [formState, setFormState] = useState(initialValue);
    const [verificationProp, setVerificationProp] = useState();
    const [authCode, setAuthCode] = useState('');
    const [authUser, setAuthUser] = useState(null);
    const [sending, setSending] = useState(false);
    const [confirming, setConfirming] = useState(false);

    // props
    const {first_name, last_name, username, email, phone, referral} = formState;
    const {children} = props; 

    // Firebase 
    const recaptchaVerifier = React.useRef(null);
    const firebaseConfig = app.length ? app.options : undefined;  

    // Functions
    const handleGetOtp = async() =>{               
        try {     
            setSending(true);      
            const phoneProvider = new PhoneAuthProvider(auth);
            const verificationId = await phoneProvider.verifyPhoneNumber(
              phone,
              recaptchaVerifier.current
            );           
            setVerificationProp(verificationId)
        } catch (error) {     
            setSending(false);    
            console.log(error);            
        }                
    };

    const handleResendOtp= async() =>{
        try {
                   
            // no exact method found                       
        } catch (error) {
            console.log(error);
        }
    }
    const handleSignupConfirmation = async()=>{
        try {    
            setSending(false);        
            setConfirming(true);
            const credential = PhoneAuthProvider.credential(
                verificationProp,
                authCode
            );            
            await signInWithCredential(auth, credential); 
            const user = auth.currentUser;
            setAuthUser(user);
            handleMetaData();
            setFormState(initialValue);
        } catch (error) {
            setConfirming(false)
            console.log(error);            
        }
    };

    // Firestore
    const collectionRef = collection(db, "users");

    const handleMetaData = async()=>{
        await addDoc(collectionRef, {...formState});
    };

    return(
        <UserContext.Provider value={{
            formState,
            setFormState,
            authUser,
            setAuthUser,
            app,
            recaptchaVerifier,
            firebaseConfig,
            verificationProp,
            handleGetOtp,
            sending,
            authCode,
            setAuthCode,
            handleResendOtp,
            handleSignupConfirmation,
            setConfirming,
            confirming,
        }}>
            {children}
        </UserContext.Provider>
    )    
}

export default UserContext;
export {UserProvider}