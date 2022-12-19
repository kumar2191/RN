import react from "react";
import {Platform, StyleSheet, Text } from 'react-native';
// import fontcolors from "../config/fontcolors";

//the ({children}) is destructuring for provide the styles for the children of the component
// we can also use (props) and in return props.children
const CustomText=({children,style,...otherprops})=>{
    return(
      <Text {...otherprops} style={[styles.text,style]}>{children}</Text>
    )
}

export default CustomText

Platform.select({
    ios:{
        fontSize:20,
        color:'black',
        fontFamily:'Avani',
    },
    android:{
        fontSize:30,
        color:'blue',
        fontFamily:'Roboto'
    }
})

const styles = StyleSheet.create({
text:{
   fontSize:Platform.OS==='android'?15:15,
   color:'black',
}
})