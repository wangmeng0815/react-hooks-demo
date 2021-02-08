
const ADD_VAL = 'add';
const REMOVE_VAL = 'reduce';

// reducer
export function counter(state = 0, action) {
    switch (action.type) {
        case ADD_VAL:
            return state + 1
        case REMOVE_VAL:
            return state - 1
        default:
            return 10
    }
}

// action creater
export function addFunc() {
    return { type: ADD_VAL }
}
export function removeFunc() {
    return { type: REMOVE_VAL }
}
export function asyncAddFunc() {
    return dispatch => {
        setTimeout(() => {
            dispatch(addFunc());
        }, 1000);
    }
}
export function asyncReduceFunc() {
    return dispatch => {
        setTimeout( () => {
            dispatch(removeFunc());
        }, 1000);
    }
}
