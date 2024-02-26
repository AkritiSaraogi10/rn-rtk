import { createSlice } from '@reduxjs/toolkit';
//  this slice will take care of action constants, action object, action creator, switch statements in reducer, and handling immutable updates in the reducer. 
const initialState = {
    numOfCakes: 20
}

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfCakes--;
        },
        // create Slice wil make the Action creators name with the same 
        // name which we have written in the reducer function
        // that is ordered and restocked
        // We dont have to write it by hand
        restocked: (state, action) => {
            state.numOfCakes += action.payload;
        }
    }
})

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;