import { createSlice } from '@reduxjs/toolkit'

export const dotsSlice = createSlice({
    name: 'dotsSlice',
    initialState: {
        value: [],
    },
    reducers: {
        addDot: (state, point) => {
            state.value.push(point)
        },
        deleteDots: (state) => {
            state.value = []
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    addDot,
    deleteDots } = dotsSlice.actions

export default dotsSlice.reducer