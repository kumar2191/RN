import React from 'react'
import {StyleSheet  } from 'react-native'
import CustomText from './CustomText';

const ErrorMsg = ({err}) => {
    if(!err) return null
    return (
        
        <CustomText style={{color:'red'}}>{err}</CustomText>
    );
}

export default ErrorMsg;
const styles = StyleSheet.create({
    
})