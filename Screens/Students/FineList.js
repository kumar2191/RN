import React, { useState,useEffect}from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import EndPoint from '../../Constant/EndPoints'
import CustomButton from '../../Custom/Button';
function FineList(props) {
      const [Token, setToken] = useState('')
  const [UserData,setUserData]=useState()
    const GetToken = async () => {
    let data = await AsyncStorage.getItem('token')
        setToken(data)
        // console.log(data);
    }
    const GetFineList = async() => {
         axios({
                method:"get",
                url:EndPoint.GetFine,
                headers:{
                    accept: 'application/json',
                    token:Token
                }
            }).then(res=>{
                setUserData(res.data)
                // console.log(UserData);
            }).catch(err=>{
                console.error(err.message);
            })
    }
    useEffect(() => {
        GetToken()
        GetFineList()
    },[UserData])
  return (
      <View style={styles.container}>
          {
              
          }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default FineList;