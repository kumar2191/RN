import React, { useState,useEffect} from 'react';
import { View, StyleSheet,Text,TextInput } from 'react-native';
import CustomeForm from '../../Custom/CustomForm'
import CustomFormFeild from '../../Custom/CustomeFormField'
import*as Yup from 'yup'
import CustomSubmitButton from '../../Custom/CustomSubmitButtom'
import AsyncStorage from '@react-native-async-storage/async-storage';
import EndPoint from '../../Constant/EndPoints'
import axios from 'axios'
function ChangePassWord(props) {
        const [Token, setToken] = useState('')

      const validate=Yup.object().shape({
           password: Yup.string().required().min(3).label('password'),
       
      })
    const Update = (values) => {
        console.log(values);
 axios({
        method: 'post',
        url: EndPoint.ChangePassword,
        data: {
                    password:values.password 

        },
        headers: {
            accept: 'application/json',
            token:Token
            }
        }).then(res => {
          console.log(res.data);
        })
        .catch(err => console.error(err));
    }
      const GetToken = async () => {
    let data = await AsyncStorage.getItem('token')
    setToken(data)
    }
    useEffect(() => {
        GetToken()
    })
  return (
      <View style={styles.container}>
         
              <Text style={styles.text} >ChangePassword</Text>
           <CustomeForm initialValues={{email:'',password:''}}
                onSubmit={values=>Update(values)}
              validationSchema={validate}>
                <CustomFormFeild sty={{height:'20%'}}  name='password' placeholder='Password' icon={{name:'lock'}}></CustomFormFeild>
                <CustomSubmitButton title={'ChangePasssword'}></CustomSubmitButton>
                </CustomeForm>
         
       
          
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        color: 'red',
        fontWeight:'bold'
    }
    
});

export default ChangePassWord;