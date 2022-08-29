import api from '../../services/Api';
import { getUserSuccess, loginSuccess, logoutSuccess } from '../reducer/LoginReducer';
import Toast from 'react-native-toast-message';

export const login = ({ email, password }) => async dispatch => {
    try {
        const res = await api.post('/login', { email, password })
         console.log("res +===>. ",res.status)
         if(res.status){
             Toast.show({
                 type: 'success',
                 text1: 'Success',
                 text2: 'User login sucessfully'
             });
             dispatch(loginSuccess({ username: email, token: res.data?.token }));
         } 
       
    } catch (e) {
        
        Toast.show({
            type: 'error',
            text1: 'Login Error',
            text2: 'Email and password is not found'
        });
    }
}


export const signup = ({ email, password ,navigation}) => async dispatch => {
    try {
       
        const res = await api.post('/register', { email, password })
        console.log("res +===>. ", res.data)
        if (res.status==200){
            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: 'User register sucessfully'
            });
            dispatch(loginSuccess({ username: email, token: res.data?.token, id: res.data?.id }));
        }
    } catch (e) {
        Toast.show({
            type: 'error',
            text1: 'SignUp Error',
            text2: e.message
        });
        
    }
}

export const getUser = ({page=1}) => async dispatch => {
    try {
        const res = await api.get(`/users?page=${page}&per_page=4`)
       console.log("user list : ",res.data)
       if(res.status==200){
           if (res.data?.data.length >0){
               dispatch(getUserSuccess({ userList: res.data?.data, total_pages: res.data?.total_pages }));
           }
          
       }
        
    } catch (e) {
        Toast.show({
            type: 'error',
            text2: e.message
        });

    }
}


export const logout = () => async dispatch => {
    try {
        return dispatch(logoutSuccess())
    } catch (e) {
        return console.error(e.message);
    }
}