//import redux from 'redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
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
            state.counter+=action.payload
        },

        toggle(state) {
            state.showCounter=!state.showCounter
        }
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {isAuthenticated:false},
    reducers: {
        login(state){
            state.isAuthenticated = false
        },
        
        logout(state) {
            state.isAuthenticated=true
        }
    }
})

const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }
})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions
export default store

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