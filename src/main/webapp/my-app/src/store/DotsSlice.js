import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const dotsSlice = createSlice({
    name: 'dotsSlice',
    initialState: {
        value: [],
        loaded: false
    },
    reducers: {
        addDot: (state, point) => {
            state.value.push(point.payload)
            // console.log("point fd", point)
            // console.log("state fd", state)
        },
        deleteDots: (state) => {
            state.value = []
        },
        loadDots: (state, dots) => {
            state.value = [];
            state.value = state.value.concat(dots.payload);
            // state.value.push(dots);
            // dots.payload.forEach(dot => {
            //     console.log("dot", dot)
            //
            //     // state.value.push(dot)
            // });
            console.log("payload", dots.payload)
            // state.value = dots.payload;
            // console.log("state.value", state.value)
            state.loaded = true;
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchPoints.fulfilled, (state, action) => {
            return action.payload
        })
    }
})


export const fetchPoints = createAsyncThunk('dotsSlice/fetchPoints', async () => {
    let dots = [];
    const response = await fetch('api/dots')
            .then(response => response.json())
            .then(data => {
                data.forEach(dot => {dots.push({x: dot.x, y: dot.y, r: dot.r, hit: dot.hit})})
                // console.log("data", dots)
                // store.dispatch(loadDots(dots));
            })
    console.log("fetchPo", dots)
    return dots;
})



// Action creators are generated for each case reducer function
export const {
    addDot,
    deleteDots ,
    loadDots} = dotsSlice.actions

export default dotsSlice.reducer