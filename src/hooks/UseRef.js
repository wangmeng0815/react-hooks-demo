import React, { useState, useRef, useMemo, useEffect } from 'react';

/**
 * 1. 传统用法： 获取对应的DOM对象
 * 2. “跨渲染周期” 保存数据
 */
const App = () => {
    const [count, setCount] = useState(0);

    const doubleCount = useMemo(() => {
        return 2 * count;
    }, [count]);

    const counterRef = useRef();

    useEffect(() => {
        document.title = `The value is ${count}`;
        console.log(counterRef.current);
    }, [count]);


    // ! 这里是关键
    const timerID = useRef();
    useEffect(() => {
        timerID.current = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);
    }, []);
    useEffect(() => {
        if (count > 10) {
            clearInterval(timerID.current);
        }
    });

    return (
        <>
            <h3>useRef</h3>
            <div>1. 传统用法： 获取对应的DOM对象</div>
            <div>2. “跨渲染周期” 保存数据</div>
            <button ref={counterRef} onClick={() => { setCount(count + 1) }}>Count: {count}, double: {doubleCount}</button>
        </>
    )
}

export default App;
