import react from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const CustomButton=({text,color,onPress})=>{
    return(
<TouchableOpacity onPress={onPress}>
            <View style={[styles.btn,{backgroundColor:color}]} >
                <Text style={styles.text} >{text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
export default CustomButton

const styles=StyleSheet.create({
    btn:{
        width:320,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:75,
        // paddingVertical:20,
        // paddingHorizontal:100,
        // backgroundColor:'#ff6666',
        // marginBottom:25,
        marginVertical:5
    },
    text:{
        fontSize:20,
    }
})