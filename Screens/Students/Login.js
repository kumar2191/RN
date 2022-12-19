import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import CustomeForm from '../../Custom/CustomForm'
import CustomFormFeild from '../../Custom/CustomeFormField'
import*as Yup from 'yup'
import CustomSubmitButton from '../../Custom/CustomSubmitButtom'
import EndPoint from '../../Constant/EndPoints'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  useNavigation } from '@react-navigation/native';

function Register(props) {
        const navigation=useNavigation();

       const validate=Yup.object().shape({
           email: Yup.string().required().email().label('email'),
           password: Yup.string().required().min(5).label('password'),
          
       })
  const UserLogin = async(values) => {
    // console.log(values.email);
     axios.post(EndPoint.Student_Login,{
            email:values.email,
            password:values.password
        })
       .then(async(response)=>{
         console.log(response.data)
         setTimeout(() => {
               navigation.navigate('StudentProfile')       
                    },1000)

         // localStorage.setItem('token',response.data)
        await AsyncStorage.setItem('token', response.data)
       
         }).catch(
          error=>{
           console.log(error);
          }
          
          )
    
  }
  
  return (
      <View style={styles.container}>
           <CustomeForm initialValues={{email:'',password:''}}
                onSubmit={values=>UserLogin(values)}
              validationSchema={validate}>
              <Text style={styles.heading} >Student-Login</Text>
              <CustomFormFeild
                  sty={{height:'20%'}}
                  name='email'
                   placeholder='enter email' icon={{ name: 'email' }}></CustomFormFeild>
                <CustomFormFeild sty={{height:'20%'}} name='password' placeholder='enter password' icon={{name:'lock'}}></CustomFormFeild>
             <CustomSubmitButton title={'Login'}></CustomSubmitButton>
                </CustomeForm>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
       alignItems:'center',
        justifyContent:'center'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
        marginTop: 10,
        
    }
});

export default Register;