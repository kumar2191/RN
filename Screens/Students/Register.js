import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import CustomeForm from '../../Custom/CustomForm'
import CustomFormFeild from '../../Custom/CustomeFormField'
import*as Yup from 'yup'
import CustomSubmitButton from '../../Custom/CustomSubmitButtom'
import EndPoint from '../../Constant/EndPoints'
import axios from 'axios'
import {  useNavigation } from '@react-navigation/native';

function Register(props) {
      const navigation=useNavigation();

       const validate=Yup.object().shape({
           email: Yup.string().required().email().label('email'),
           password: Yup.string().required().min(5).label('password'),
           name: Yup.string().required().min(3).label('name'),
           Reg_no: Yup.string().required().label('Reg_no'),
           Department: Yup.string().required().label('Department'),
        //    Batch: Yup.string().required().min().max().label('Batch')
       })
  const Student_Regester = (values) => {
    // console.log(values);
    const data = {
      name:values.name,
      RegNo:values.Reg_no,
      Dept:values.Department,
      email:values.email,
      password: values.password,
      Batch:values.Batch,
    }
    console.log(data);
     axios.post(EndPoint.Student_Register,{
         name:values.name,
      RegNo:values.Reg_no,
      Dept:values.Department,
      email:values.email,
      password: values.password,
      Batch:values.Batch,
        })
       .then(async(response)=>{
         console.log(response.data)
                          navigation.navigate('StudentLogin')
         }).catch(
          error=>{
           console.log(error);
          }
          
          )
  }
  return (
      <View style={styles.container}>
           <CustomeForm initialValues={{email:'',password:''}}
                onSubmit={values=>Student_Regester(values)}
              validationSchema={validate}>
              <Text style={styles.heading} >Student-Registration</Text>

                <CustomFormFeild sty={{height:'10%'}}  name='name' placeholder='YourName' icon={{name:'rename-box'}}></CustomFormFeild>
                <CustomFormFeild sty={{height:'10%'}} name='email' placeholder='enter email' icon={{name:'email'}}></CustomFormFeild>
                <CustomFormFeild sty={{height:'10%'}} name='password' placeholder='enter password' icon={{name:'lock'}}></CustomFormFeild>
                <CustomFormFeild sty={{height:'10%'}} name='Reg_no' placeholder='enter Reg_no' icon={{name:'mail'}}></CustomFormFeild>
                <CustomFormFeild sty={{height:'10%'}} name='Department' placeholder='enter Department' icon={{name:'mail'}}></CustomFormFeild>
                <CustomFormFeild sty={{height:'10%'}} name='Batch' placeholder='enter Batch' icon={{name:'mail'}}></CustomFormFeild>
              <CustomSubmitButton title={'Register'}></CustomSubmitButton>
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