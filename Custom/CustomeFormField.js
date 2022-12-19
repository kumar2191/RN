import { Formik } from 'formik'
import React from 'react'
import {StyleSheet  } from 'react-native'
import CustomInput from './CustomInput'
import ErrorMsg from './ErrorMsg'
import {useFormikContext} from 'formik'

const CustomFormFeild = ({name,sty,...otherprops}) => {
    const {setFieldTouched,handleChange,errors,touched} = useFormikContext()
    return (
        <>
        <CustomInput
        //  icon={{name:'email'}} 
        //  placeholder={} 
         onBlur={()=>(setFieldTouched(name))} 
         onChangeText={handleChange(name)}
         sty={sty}
         {...otherprops}
         >

         </CustomInput>
         {touched[name]&&<ErrorMsg err={errors[name]}></ErrorMsg>}
         </>
    );
}

export default CustomFormFeild;

const styles = StyleSheet.create({
    
})