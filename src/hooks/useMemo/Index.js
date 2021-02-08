import React, { memo, useState, useEffect } from 'react';
import Simple from '../../components/Simple.js';
import UseMemo from './UseMemo.js';

const MemoChild = memo(Simple);
const App = () => {
    // ? 性能优化hooks: 父组件——memo、子组件——useMemo
    // * 在子组件不需要父组件的值和函数的情况下，只需要使用memo函数包裹子组件即可
    // * useMemo针对个别属性 刷新子组件
    const initialValue = 0;
    const [ count, setCount ] = useState(initialValue);
    const [ items, setItems ] = useState([]);

    const handleClick1 = () => {
        setCount((oldVal) => {
            return oldVal + 1
        })
    }

    const handleClick2 = () => {
        setItems([
            ...items,
            {
                id: items.length,
                val: Math.floor(Math.random() * 10) + 1
            }
        ])
    }

    // * 不传递第二个参数 -> 每次render之后都会执行这个 useEffect
    useEffect(() => {
        console.log('%cmemo-componentDidUpdate: 不传递第二个参数 -> 每次render之后都会执行这个 useEffect', 'color: blue;')
    });

    return (
        <>
            <h2>
                memo: 在子组件不需要父组件的值和函数的情况下，只需要使用memo函数包裹子组件即可。
            </h2>
            <MemoChild />
            {/* <Simple /> */}

            <div>
                <button className="btn" onClick={ handleClick1 }>点击改变count</button>
                <button className="btn" onClick={ handleClick2 }>点击改变items</button>
                <button className="btn" onClick={() => setCount(initialValue)}>reset</button>
            </div>
            <div>父组件里的count: { count }</div>
            <UseMemo count={count} items={items} />
        </>
    )
}

export default App;

