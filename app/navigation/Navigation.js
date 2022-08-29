import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login/Login';
import SignUp from '../screens/signup/Signup';
import Home from '../screens/home/home';
import store from '../redux/store'
import { Provider, useSelector } from 'react-redux'
import Toast from 'react-native-toast-message';


const Stack = createNativeStackNavigator();
const showHader={
  headerShown:false
}
const  RouteNavigation=() => {  
 
  return (
    <Provider store={store}>
    <NavigationContainer>
        <Stack.Navigator >
        <Stack.Screen name='NoAuth' component={NoAuthStack} options={showHader} />
        <Stack.Screen  name='Auth' component={AuthStack} options={showHader} /> 
    </Stack.Navigator>
    </NavigationContainer>
      <Toast />
    </Provider>
  );
}

const AuthStack = ()=>{
    return( <Stack.Navigator >
      <Stack.Screen name="Home" component={Home} options={showHader} /> 
    </Stack.Navigator>)
}


const NoAuthStack = ()=>{
    return (<Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={showHader} />
      <Stack.Screen name="SignUp" component={SignUp} options={showHader} />  
    </Stack.Navigator>)
}


export default RouteNavigation;

