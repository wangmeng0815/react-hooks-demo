import React, { useContext, useState } from 'react';
import Child from './Child1.js';
import { TestContext } from '../../utils/context-manager.js';

/**
 * 1. 如果要使用创建的上下文，需要通过 Context.Provider 最外层包装组件，并且需要显示的通过 <TestContext.Provider value={{xx:xx}}> 的方式传入 value，指定 context 要对外暴露的信息。
 * 2. 一般的做法是将父组件的方法比如 setXXX 通过 props 的方式传给子组件，而一旦子组件多层级的话，就要层层透传。
 */

// ? 使用 Context 的方式则可以免去这种层层透传子组件在匹配过程中只会匹配最新的 Provider，也就是说如果有下面三个组件：ContextA.Provider->A->ContexB.Provider->B->C, 如果 ContextA 和 ContextB 提供了相同的方法，则 C 组件只会选择 ContextB 提供的方法。

const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        });
    })
}
export default (props = {}) => {

    const [step, setStep] = useState(0);
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);

    return (
        <TestContext.Provider value={{ setStep, setCount, setNumber, fetchData }}>
            <h3>useContext</h3>
            <p>{ `1. 如果要使用创建的上下文，需要通过 Context.Provider 最外层包装组件，并且需要显示的通过 <TestContext.Provider value={{xx:xx}}> 的方式传入 value，指定 context 要对外暴露的信息。` }</p>
            <p>2. 一般的做法是将父组件的方法比如 setXXX 通过 props 的方式传给子组件，而一旦子组件多层级的话，就要层层透传。</p>
            <p>{ `<Child step={step} number={number} count={count} />` }</p>
            <Child step={step} number={number} count={count} />
        </TestContext.Provider>
    )
}
