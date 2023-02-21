import redux from 'redux'
import { createSlice } from '@reduxjs/toolkit'

const counterReducer = (state = {counter:0, showCounter:true},action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }

    if (action.type === 'increase') {
        return {
            counter:state.counter+action.amount
        }
    }
    
    if (action.type === 'decrement') {
        return {
            counter:state.counter-1
        }
    }

    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state
}

const store = redux.createStore(counterReducer)

export default store