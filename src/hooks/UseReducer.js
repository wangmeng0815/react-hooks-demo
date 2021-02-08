import React, { useReducer } from 'react';

const ReducerDemo = () => {
    const [ count, disPatch ] = useReducer((state, action) => {
        switch(action){
            case 'add':
                state = state + 1;
                break;
            case 'sub':
                state = state - 1;
                break;
            default:
                return state;
        }
        return state;
    }, 0);
    return (
        <div>
            <h1 className="title">{count}</h1>
            <button className="btn is-primary" onClick={()=> disPatch('add')} >Increment</button>
            <button className="btn is-primary" onClick={()=> disPatch('sub')} >Decrement</button>
        </div>
    )
}

export default ReducerDemo;
