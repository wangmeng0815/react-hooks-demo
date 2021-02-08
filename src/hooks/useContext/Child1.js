import React, { useContext, useEffect, memo } from 'react'
import Child from './Child2.js';

import { TestContext } from '../../utils/context-manager.js';

export default (props = {}) => {
    const { setStep, setNumber, setCount, fetchData } = useContext(TestContext);
    const temp = `const { setStep, setNumber, setCount, fetchData } = useContext(TestContext);`;

    useEffect(() => {
        fetchData().then(res => {
            console.log(`FETCH DATA: ${res}`);
        })
    });

    let { step, count, number } = props;
    return (
        <div className="box">
            <div className="red">{ temp }</div>
            <div>step is : { step }</div>
            <div>number is : { number }</div>
            <div>count is : { count }</div>

            <div>
                <button onClick={() => { setStep(step + 1)}}>step++</button>
                <button onClick={() => { setNumber(number + 1)}}>number++</button>
                <button onClick={() => { setCount(count + 1)}}>count++</button>
            </div>

            <div>
                <Child step={step} number={number} count={count}></Child>
            </div>
        </div>
    )
}
