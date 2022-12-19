import React from 'react'
import { StyleSheet } from 'react-native'
import { Formik } from 'formik';

const CustomeForm = ({initialValues,onSubmit,validationSchema,children}) => {
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >{()=>(<>
            {children}
            </>)}</Formik>
    );
}

export default CustomeForm;

const styles = StyleSheet.create({
    
})