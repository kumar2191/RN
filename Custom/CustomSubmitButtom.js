import React from 'react'
import {StyleSheet  } from 'react-native'
import {useFormikContext} from 'formik'
import CustomButton from './Button'
import fontcolors from '../config/fontcolors'

const CustomSubmitButton = ({title,color=fontcolors.primary}) => {
    const {handleSubmit}=useFormikContext()
    return (
        <>
            <CustomButton text={title} color={color} onPress={handleSubmit}></CustomButton>
        </>
    );
}

export default CustomSubmitButton;
const styles = StyleSheet.create({
    
})