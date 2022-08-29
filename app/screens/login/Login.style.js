import { Dimensions, StyleSheet } from 'react-native'

const width=Dimensions.get('screen').width

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"  
    },
    loginText:{
        color:"black",
        fontSize:26,
        fontWeight:"bold"
    },
    createAccount:{
        color: "black",
        fontSize: 15,
    },
    createBtnText: {
        color: "black",
        fontSize: 15,
        fontWeight:"bold"
    },
    createView:{
        flexDirection:"row",
        alignItems:"center"
    },
    error: {
        marginTop: 5,
        width: width * 0.52,
        color: "red"
    },
  });

  export default styles;