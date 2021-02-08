import React, { useContext } from 'react';
import { TestContext } from '../../utils/context-manager.js';

export default (props = {}) => {
    const { setStep, setNumber, setCount } = useContext(TestContext);
    const temp = `const { setStep, setNumber, setCount } = useContext(TestContext);`;
    return (
        <div className="box">
            <div>{ temp }</div>
            <button onClick={() => { setStep(props.step + 1)}}>step++</button>
            <button onClick={() => { setNumber(props.number + 1)}}>number++</button>
            <button onClick={() => { setCount(props.count + 1)}}>count++</button>
        </div>
    )
}
