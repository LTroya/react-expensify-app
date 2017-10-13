import React from 'react';
import { createStore } from 'redux';

// Action generators
const incrementCount = ({ incrementBy = 1 } = {}) => (    {
    type: 'INCREMENT',
    incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy,
});

const resetCount = () => ({
    type: 'RESET',
});

const setCount = ({ count }) => ({
    type: 'SET',
    count,
});

// Reducers
const countReducers = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy,
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy,
            };
        case 'RESET':
            return {
                count: 0,
            };
        case 'SET':
            return {
                count: action.count,
            };
        default:
            return state;
    }
};

const store = createStore(countReducers);

const unsubscribe = store.subscribe(() => {
    console.log('Store', store.getState());
});

// Actions
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({ count: 101 }));

const Test = () => (<div/>);
export default Test;
