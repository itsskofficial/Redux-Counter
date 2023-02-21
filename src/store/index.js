import redux from 'redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'

createSlice({
    name: 'counter',
    initialState:{ counter: 0, showCounter: true },
    reducers: {
        increment(state) {
            state.counter++
        },

        decrement(state) {
            state.counter--
        },

        increase(state, action) {
            state.counter+=action.amount
        },

        toggle(state) {
            state.showCounter=!state.showCounter
        }
    }
})

const store = configureStore({
    reducer:
})

// const counterReducer = (state = {counter:0, showCounter:true},action) => {
//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1
//         }
//     }

//     if (action.type === 'increase') {
//         return {
//             counter:state.counter+action.amount
//         }
//     }
    
//     if (action.type === 'decrement') {
//         return {
//             counter:state.counter-1
//         }
//     }

//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }

//     return state
// }

// const store = redux.createStore(counterReducer)

export default store