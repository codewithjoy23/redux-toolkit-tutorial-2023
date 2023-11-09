'use client'
import { createSlice, current } from "@reduxjs/toolkit"
function getinitdata(){
  if(typeof window !=='undefined'){
    if(localStorage.getItem('names')){
      return JSON.parse(localStorage.getItem('names'))
    }
  }
  return []
}

const Slice = createSlice({
  name: 'demo',
  initialState: getinitdata(),
  reducers: {
    addname(state, action) {
      // console.log('our data',action.payload)
      state.push(action.payload)
      localStorage.setItem('names',JSON.stringify(state))
      // console.log(current(state))
    },
    deletename(state, action) {
      var index = action.payload
      state.splice(index,1)
      localStorage.setItem('names',JSON.stringify(state))
    }
  },
})


export const { addname, deletename } = Slice.actions
export default Slice.reducer