import React, { useContext, memo, useMemo } from 'react';

import { TestContext } from '../../utils/context-manager.js';

// ? 在点击子组件的 【number + step】 按钮的时候, 虽然count的值没有发生任何变化， 但是一直触发re-render， 即使子组件是通过React.memo包装过的
// ! 出现这个问题的原因 是React.memo只会对props进行浅比较， 而通过Context我们直接将state注入到了组件内部，因此state的变化必然会触发re-render，整个state变化时绕过了memo
export default memo( (props={}) => {
    const { state, dispatch } = useContext(TestContext);
    return (
        <div className="box">
            { console.log('[Child] RE-RENDER') }
            <div>{`将整个 state 通过 Context 传入就无需层层组件的 props 传递（如果不需要整个state，可以只将某几个 state 给 Provider）`}</div>
            <div>{`  `}</div>
            <div>step is : {state.step} </div>
            <div>number is : {state.number} </div>
            <div>count is : {state.count} </div>
            <div className="red">在点击子组件的 【number + step】 按钮的时候, 虽然count的值没有发生任何变化， 但是一直触发re-render， 即使子组件是通过React.memo包装过的</div>
            <div className="red">出现这个问题的原因 是React.memo只会对props进行浅比较， 而通过Context我们直接将state注入到了组件内部，因此state的变化必然会触发re-render，整个state变化时绕过了memo</div>
            <div className="red">React.memo() 无法拦截注入到Context的state变化， 那就需要我们在组件内部进行更细粒度的性能优化 —— useMemo()</div>
            <div>
                <button onClick={() => dispatch({ type: 'stepInc'})}>step ++</button>
                <button onClick={() => dispatch({ type: 'numberInc'})}>number ++</button>
                {/* // ! 直接使用父组件 state 带来的性能问题 */}
                <button onClick={() => dispatch({ type: 'count'})}>count ++</button>
            </div>
        </div>
    )
})

// ! React.memo() 无法拦截注入到Context的state变化， 那就需要我们在组件内部进行更细粒度的性能优化 —— useMemo()
// export default (props = {}) => {
//     const { state, dispatch } = useContext(TestContext);
//     let { step, number, count } = state;
//     return useMemo(() => {
//         { console.log('[Child] RE-RENDER') }
//         return (
//             <div className="box">
//                 <div>step is : {step}</div>
//                 <div>number is : {number}</div>
//                 <div>count is : {count}</div>

//                 <div>
//                     <button onClick={() => { dispatch({type: 'stepInc'}) }}>step ++</button>
//                     <button onClick={() => { dispatch({type: 'numberInc'}) }}>number ++</button>
//                     <button onClick={() => { dispatch({type: 'count'}) }}>number + step</button>
//                 </div>
//             </div>
//         )
//     }, [count, number, step, dispatch])
// }
