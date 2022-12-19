import React from "react";
import { View, StyleSheet, ImageBackground,Text} from "react-native";
import Button from "../Custom/Button";
import BG_image from '../images/drops-4968242.jpg'
import {  useNavigation } from '@react-navigation/native';

function Home() {
    const navigation=useNavigation();
  return (
      <ImageBackground
          source={BG_image}
          style={{ flex:1}}  
      >
          <View style={styles.container}>
              <View style={styles.StudentCointainer}>
                  <View  >
                       <Text style={{
                  fontSize: 50,
                  color: 'purple',
                  
              }} >FMS</Text>
             </View>
                  <Text style={styles.text} >Students</Text>
              <Button
                  text="Register"
                      color="red"
                      onPress={() => {
                          navigation.navigate('StudentRegisteration')
                      }}
                  />
                   <Button
                  text="Login"
                      color="red"
                         onPress={() => {
                          navigation.navigate('StudentLogin')
                      }}
                  />
              </View>
               <View style={styles.Student_Cointainer}>
                  <Text style={styles.text} >Cashier</Text>
              <Button
                  text="Login"
                      color="orange"
                       onPress={() => {
                          navigation.navigate('CashierLogin')
                      }}
                  />
              </View>
              
              
      </View>
     </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container: {
      marginTop:100
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color:'#1b9e6e'
        
    },
    StudentCointainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    Student_Cointainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // marginBottom:500
    },

});

export default Home;
