import React from 'react'
import { StyleSheet, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const Icon = ({color,name,size,bgcolor=null}) => {
    return (
        <>
        <View style={{backgroundColor:bgcolor,borderRadius:50,justifyContent:'center',alignItems:'center'}}>
        <MaterialCommunityIcons name={name} color={color} size={size} >
            </MaterialCommunityIcons> 
            </View>
        </>

    );
}

export default Icon;

const styles=StyleSheet.create({
    // icon:{
    //     justifyContent:'center',
    //     alignItems:'center'
    // }
})