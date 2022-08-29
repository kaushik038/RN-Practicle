import { value } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View,FlatList, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ImagePath from "../../assets/images";
import CustomButton from "../../component/Button/Button";
import CustomInput from "../../component/CustomInput/CustomInput";
import Sparator from "../../component/Sparetor";
import { getUser, logout } from "../../redux/actions/LoginAction";
import styles from "./home.styles";


const Home = ({ navigation }) => {
  const dispatch = useDispatch()

  const userList = useSelector(state => state?.user?.userList)
  const total_pages = useSelector(state => state?.user?.total_pages)

    const [page,setPage]=useState(1)

  console.log("userList =-==-> ", total_pages)

    useEffect(()=>{
      dispatch(getUser({page:page}))
    },[])

 function loadMoreData(){
   setPage(page+1)
   
    dispatch(getUser({ page: page+1}))
  }

    return <View style={styles.container}>
        <FlatList
        data={userList}
      numColumns={2}
      renderItem={({ item }) => <View style={styles.userCardView}>
        <Image source={item?.avatar ? { uri: item?.avatar }: ImagePath.user}  style={styles.user}/>
        <Text style={styles.titleText}>{item?.first_name} {item?.last_name}</Text>
        <Text style={styles.subTitle}>{item?.email}</Text>
        </View>
      } 
    />
      
      {total_pages!=page && <TouchableOpacity 
    onPress={()=>{
          loadMoreData()
    }}
    style={styles.loadMoreBtn}>
        <Text style={styles.loadMoreBtnText}>Load More Data</Text>
    </TouchableOpacity>}
      <TouchableOpacity
        onPress={() => {
          dispatch(logout())
          navigation.navigate('NoAuth')
        }}
        style={styles.logoutBtn}>
        <Text style={styles.loadMoreBtnText}>Log out</Text>
      </TouchableOpacity>
    </View>
  
}

export default Home;