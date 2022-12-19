import React, { useState,useEffect} from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import EndPoint from '../../Constant/EndPoints'
import CustomButton from '../../Custom/Button';
import {  useNavigation } from '@react-navigation/native';

function Profile(props) {
  const [Token, setToken] = useState('')
  const [UserData, setUserData] = useState()
        const navigation=useNavigation();

  const GetToken = async () => {
    let data = await AsyncStorage.getItem('token')

    setToken(data)
    // console.log(Token);
  }
  const UserProfile = () => {
     axios({
                method:"get",
                url:EndPoint.UserProfile,
                headers:{
                    accept: 'application/json',
                    token:Token
                }
            }).then(res=>{
              setUserData(res.data)
              
              // StudentProfile
                // console.log(UserData);
            }).catch(err=>{
                console.error(err.message);
            })
  }
  useEffect(() => {
    GetToken()
    UserProfile()
   },[UserData])
  
  return (
    <View style={styles.container}>
      {/* <View style={styles.tabelHead} >
        <Text>Name</Text>
        <Text>RegNO</Text>
        <Text>DepartMent</Text>
        <Text>Email</Text>
      </View> */}
      {
        UserData ?
          <>
        <View >
              {/* <Text>{ UserData.name}</Text>
        <Text>{ UserData.RegNo}</Text>
        <Text>{ UserData.Dept}</Text>
        <Text>{ UserData.email}</Text> */}
              <View style={styles.tabelHead}>
                <Text>Name :</Text>
                <Text>{ UserData.name}</Text>
              </View>
              <View style={styles.tabelHead}>
                <Text>RegNo: </Text>
                <Text>{ UserData.RegNo}</Text>
              </View>
              <View style={styles.tabelHead}>
                <Text>Dept: </Text>
                <Text>{ UserData.Dept}</Text>
              </View>
              <View style={styles.tabelHead}>
                <Text>email: </Text>
                <Text>{ UserData.email}</Text>
              </View>
              
      </View>
          </>
        : <Text>Loading.....</Text>
      }
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
      }}
      >
           <CustomButton
        text="Edit"
          color='green'
          onPress={() => {
            navigation.navigate('StudentEditProfile')
          }}
      />
  <CustomButton
        text="Fine-List"
          color='red'
           onPress={() => {
            navigation.navigate('StudentFineList')
          }}
      />
      <CustomButton
        text="LogOut"
          color='red'
          onPress={() => {
            navigation.navigate('home')
          }}
      />
   </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  tabelHead: {
    display: 'flex',
    flexDirection: 'row',
    padding:10
  }
});

export default Profile;