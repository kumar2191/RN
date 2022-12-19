import React, { useState,useEffect} from 'react';
import { View, StyleSheet,Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import EndPoint from '../../Constant/EndPoints'
import CustomeForm from '../../Custom/CustomForm'
import CustomFormFeild from '../../Custom/CustomeFormField'
import*as Yup from 'yup'
import CustomSubmitButton from '../../Custom/CustomSubmitButtom'
import Button from '../../Custom/Button'
import {  useNavigation } from '@react-navigation/native';

function EditProfile(props) {
    const [Token, setToken] = useState('')
    const [UserData, setUserData] = useState()
          const navigation=useNavigation();

       const validate=Yup.object().shape({
        //    name: Yup.string().required().min(3).label('name'),
        //    Department: Yup.string().required().label('Department'),
        //    Section: Yup.string().required().min().max().label('Section')
       })
  const GetToken = async () => {
    let data = await AsyncStorage.getItem('token')
    setToken(data)
    }
    const Update = async (values) => {
        console.log(values);
        // alert('djkhb')
        axios({
        method: 'post',
        url: EndPoint.EditProfile,
        data: {
            name:values.name,
            Dept:values.Department,
            Section:values.Section,
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

  useEffect(() => {
    GetToken()
   },[])
  return (
      <View style={styles.container}>
                  
   <CustomeForm initialValues={{email:'',password:''}}
                onSubmit={values=>Update(values)}
              validationSchema={validate}>
              <Text style={styles.heading} >Edit-Profile</Text>
                <CustomFormFeild sty={{height:'15%'}}  name='name' placeholder='YourName' icon={{name:'rename-box'}}></CustomFormFeild>
                <CustomFormFeild sty={{height:'15%'}} name='Section' placeholder='enter Section' icon={{name:'email'}}></CustomFormFeild>
                <CustomFormFeild sty={{height:'15%'}} name='Department' placeholder='enter Department' icon={{name:'mail'}}></CustomFormFeild>
              <CustomSubmitButton title={'Register'}></CustomSubmitButton>
                </CustomeForm>
          <Button
              text="ChangePassword"
              color='red'
               onPress={() => {
            navigation.navigate('StudentChangePassword')
          }}
              
          ></Button>


    </View>
  );
}

const styles = StyleSheet.create({
    container: {},
     tabelHead: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // backgroundColor: 'red',
    padding:10
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 100,
        color: 'red',
        marginRight:40
     }
});

export default EditProfile;