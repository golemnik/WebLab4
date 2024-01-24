import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: "",
        password: "",
        logged: false
    },
    reducers: {
        setLogin: (state, login) => {
            state.login = login;
        },
        setPassword: (state, password) => {
            state.password = password;
        },
        setLogged: (state, auth) => {
            state.logged = auth;
            console.log("logged");
            console.log(state.logged);
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    setLogin,
    setPassword,
    setLogged } = authSlice.actions

export default authSlice.reducer