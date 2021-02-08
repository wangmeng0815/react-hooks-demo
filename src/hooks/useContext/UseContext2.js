import React, { useReducer, useState } from 'react';
import Child from './Child3.js';
import { TestContext } from '../../utils/context-manager.js';

/**
 * 1. 如果要使用创建的上下文，需要通过 Context.Provider 最外层包装组件，并且需要显示的通过 <TestContext.Provider value={{xx:xx}}> 的方式传入 value，指定 context 要对外暴露的信息。
 * 2. 一般的做法是将父组件的方法比如 setXXX 通过 props 的方式传给子组件，而一旦子组件多层级的话，就要层层透传。
 * 3. 所有的方法都放在了 Context.Provider.value 属性中传递，必然造成整个 Context Provider 提供的方法越来越多，也会臃肿。
 */

// ? 使用 Context 的方式则可以免去这种层层透传子组件在匹配过程中只会匹配最新的 Provider，也就是说如果有下面三个组件：ContextA.Provider->A->ContexB.Provider->B->C, 如果 ContextA 和 ContextB 提供了相同的方法，则 C 组件只会选择 ContextB 提供的方法。

const initState = { count: 0, step: 0, number: 0};

const reducer = (state, action) => {
    switch(action.type) {
        case 'stepInc':
            return Object.assign({}, state, { step: state.step + 1});
        case 'numberInc':
            return Object.assign({}, state, { number: state.number + 1});
        case 'count':
            return Object.assign({}, state, { count: state.step + state.number});
        default:
            return state;
    }
}
export default (props = {}) => {

    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <TestContext.Provider value={{ state, dispatch }}>
            <h3>useContext + useReducer</h3>
            <div className="red">{ `const [state, dispatch] = useReducer(reducer, initState);` }</div>
            <div className="red">{ `<TestContext.Provider value={{ state, dispatch }}>` }</div>
            <button onClick={() => { dispatch({type: 'stepInc'}) }}>parent step ++</button>
            <Child />
        </TestContext.Provider>
    )
}
