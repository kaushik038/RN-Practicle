import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText:{
        color: "black" ,
        fontSize:18,
        fontWeight:"bold" 
    },
    subTitle:{
        color: "grey",
        fontSize: 15,
        
    },
    userCardView:{
        paddingVertical:20,
        width:'50%',
        justifyContent: "center",
        alignItems:"center",
        borderWidth:1.5,
        borderRadius:5,
       
    },
    user:{ 
        width: 100,
        height: 100,
        borderRadius:50,
    },
    loadMoreBtn: { 
        height: 45, 
        backgroundColor: "black", 
        width:'100%',
        justifyContent:"center",
        alignItems:"center"
    },
    loadMoreBtnText: { color: 'white' },
    logoutBtn: {
        borderTopWidth:1,
        borderTopColor:"white",
        height: 45,
        backgroundColor: "black",
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
 
});

export default styles;