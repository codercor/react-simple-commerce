import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        username: "",
        email: "",
        role: 0,
        name: "",
        lastname: "",
        phone: "",
        address: "",
    },
    reducers: {
        increment: (state) => {

        },
        decrement: (state) => {

        },
        incrementByAmount: (state, action) => {

        },
    },
})

export const { increment, decrement, incrementByAmount } = userSlice.actions

export default userSlice.reducer