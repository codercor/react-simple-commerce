import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        id:"",
        username: "",
        email: "",
        role: null,
        name: "",
        lastname: "",
        phone: "",
        address: "",
    },
    reducers: {
        setUserData: (state, action) => {
            console.log(action.payload);
            return state = action.payload
        }
    },
})

export const { setUserData } = userSlice.actions

export default userSlice.reducer