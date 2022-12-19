import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import CustomeForm from '../../Custom/CustomForm'
import CustomFormFeild from '../../Custom/CustomeFormField'
import*as Yup from 'yup'
import CustomSubmitButton from '../../Custom/CustomSubmitButtom'
function Register(props) {
       const validate=Yup.object().shape({
           email: Yup.string().required().email().label('email'),
           password: Yup.string().required().min(5).label('password'),
          
    })
  return (
      <View style={styles.container}>
           <CustomeForm initialValues={{email:'',password:''}}
                onSubmit={values=>console.log(values)}
              validationSchema={validate}>
              <Text style={styles.heading} >Cashier-Login</Text>
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
        
    }
});

export default Register;