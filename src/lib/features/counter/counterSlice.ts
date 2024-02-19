import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const testThunk = createAsyncThunk('test',async()=>{
  console.log('thisi is testing');
  return true;
})


const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  },
  extraReducers: (builder)=>{
    console.log('th9s is builder: ',builder);
    
     // Add reducers for additional action types here, and handle loading state as needed
     builder.addCase(testThunk.fulfilled, (state, action) => {
      // Add user to the state array
      console.log('state: ' , state);
      console.log('action: ' , action);
      
    })
  }
})

export const { incremented, decremented, } = counterSlice.actions
export const currentCounterValue = (state: { counter: { value: any } }) => state?.counter?.value
export default counterSlice.reducer