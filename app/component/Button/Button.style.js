import { Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    shadowIconview:{
        shadowOpacity: 1,
        shadowColor: "#C0C0C0",
        shadowRadius: 10,
        borderRadius: 25,
        backgroundColor: 'black',
        width: width * 0.83,
        height: width * 0.127,
        alignItems: "center",
        justifyContent: "center",
        margiBottom: 15, 
    },
    loginBtn: { 
        color: "white", 
        fontSize: 18,
        fontWeight:"bold" 
    }

});

export default styles;