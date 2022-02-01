import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'users',
    initialState: {
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