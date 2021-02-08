import React, {forwardRef, useImperativeHandle, useRef, useState } from 'react';

const Child = forwardRef((props, cref) => {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);

    const inputRef = useRef(null);

    useImperativeHandle(cref, () => ({
        name: '子组件暴露给父组件的name属性',
        focus: () => {
            inputRef.current && inputRef.current.focus();
        },
        count
    }), [num]);

    return (
        <div className="box">
            <div>count: {count}</div>
            <div>num: {num}</div>
            <input type="text" ref={inputRef} />
            <button onClick={ () => setCount(count + 1)}>setCount</button>
            <button onClick={ () => setNum(num + 1)}>setNum</button>
        </div>
    )
})

export default () => {
    const el = useRef(null);
    return (
        <div className="box">
            <div className="red">{`该钩子函数还有第三个参数，如果里面涉及到某个变化的值，只有当第三个参数发生改变时，父组件接收到的该值才会发生改变`}</div>
            <Child ref={el} />
            <button onClick={() => console.log(el)}>获取子组件暴露给父组件的东西</button>
        </div>
    )
}
