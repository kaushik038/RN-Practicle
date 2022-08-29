import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        userList:[],
        total_pages:0
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;

        },
        getUserSuccess: (state, action) => {
            state.userList = [...state.userList,...action.payload?.userList];
            state.total_pages = action.payload?.total_pages
        },
        logoutSuccess: (state, action) => {
            state.user = null;
            state.userList = []
        },
    },
});

export const { loginSuccess, logoutSuccess, getUserSuccess } = slice.actions

export default slice.reducer