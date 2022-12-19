import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import Icon from './Icon'
import defaultStyle from '../config/defaultStyle'

const CustomInput = ({icon,sty,...otherProps}) => {
    return (
        <>
            <View style={[styles.container,sty]}>
                {icon?<Icon  name={icon.name} size={25}></Icon>:null}
                <TextInput  style={defaultStyle.text} {...otherProps}></TextInput>
            </View>
        </>
    );
}

export default CustomInput;

const styles=StyleSheet.create({
    
    container:{
        flexDirection:'row',
        backgroundColor:'#f8f4f4',
        borderRadius:25,
        width:'100%',
        marginVertical:8,
        // height:'15%',
        alignItems:'center',
        paddingLeft: 10,
        marginTop:10
        
    }
})