const intialStateCounter = {
    counter: 0,
    step: 1,
    isVisible: true
}

const counterReducer = (state = intialStateCounter, action) => {
    switch (action.type) {
        case 'counter/increment':
            return {
                ...state,
                counter: state.counter + state.step
            }
        case 'counter/decrement':
            return {
                ...state,
                counter: state.counter - state.step
            }
        case 'counter/increaseBy10':
            return {
                ...state,
                counter: state.counter + 10
            }
        case 'counter/toggle':
            return {
                ...state,
                isVisible: !state.isVisible
            }
        default:
            return state
    }
}

export const incrementCounter = () => {
    return {
        type: 'counter/increment'
    }
}

export const decrementCounter = () => {
    return {
        type: 'counter/decrement'
    }
}

export const increaseBy10Counter = (step) => {
    return {
        type: 'counter/increaseBy10'
    }
}

export const toggleCounter = () => {
    return {
        type: 'counter/toggle'
    }
}

export default counterReducer
