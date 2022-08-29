import React, { useMemo, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ImagePath from "../../assets/images";
import CustomButton from "../../component/Button/Button";
import CustomInput from "../../component/CustomInput/CustomInput";
import Sparator from "../../component/Sparetor";
import { signup } from "../../redux/actions/LoginAction";
import { isValidEmail, isValidPassword } from "../../utils/validation";
import styles from "./Signup.style";

const SignUp = ({ navigation })=>{

    

    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({
        emailError:"",
        passwodError:""
    })

    const user = useSelector(state => state.user?.user)

    useMemo(() => {
        if(user?.token){
            navigation.navigate('Auth')
        }   
    }, [user])

    function userSignup() {
        console.log("email is : ",email)
        if (!email && !password){
            setError({
                ...error,
                emailError: "Please enter email",
                passwodError: "Please enter password"
            })
        }
        if (!email && password){
            setError({
                ...error,
                s: "Please enter email",
            }) 
        }
        if (email && !password) {
            setError({
                ...error,
                passwodError: "Please enter password"
            })
        }
        if (email && password && !error.emailError && !error.passwodError) {
            dispatch(signup({ email, password ,navigation}))
        }
        
    }

    return <View style={styles.container}>
        <Text style={styles.loginText}>Sign Up</Text>
        <Sparator size={45} />
        <CustomInput
            icon={ImagePath.user}
            placeholder="Email"
            onChangeText={(value) => {
                if (isValidEmail(value)){
                   
                    setError({
                        ...error,
                        emailError: ""
                    })
                }
                else{
                    setError({...error,
                        emailError:"Please enter valid email"
                    })
                }
                setEmail(value)
               
            }} />
        {error?.emailError && <Text style={styles.error}>{error?.emailError}</Text>}
        <Sparator size={20} />
        <CustomInput
            icon={ImagePath.lock}
            placeholder="Password"
            password={true}
            onChangeText={(value) => {
                console.log("value is  : ", value)
                if (isValidPassword(value)){
                   
                    setError({
                        ...error,
                        passwodError: ""
                    })
                }
                else{
                    setError({
                        ...error,
                        passwodError: "Password must have 8 characters including 1 uppercase letter, 1 lowercase letter 1 special character, and alphanumeric characters"
                    })
                }
                setPassword(value)
               
            }} />
        {error?.passwodError && <Text style={styles.error}>{error?.passwodError}</Text>}
        <Sparator size={45} />
        <CustomButton title={"Sign Up"} onPress={()=>{
            userSignup()
        }} />
        <Sparator size={25} />
        <View style={styles.createView} >
            <Text style={styles.createAccount}>Already have account?  </Text>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Login')
                }}
            >
                <Text style={styles.createBtnText}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default SignUp;