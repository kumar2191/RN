import React from 'react'
import { Platform } from 'react-native'
import fontcolors from './fontcolors'

export default{
    text:{
        color:fontcolors.dark,
        fontSize:15,
        fontFamily: Platform.OS === 'android'? 'Roboto' : 'Avanir'
    },
    color:fontcolors
}