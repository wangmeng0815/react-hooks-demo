import React, { useState, useEffect } from 'react';

import { getData } from "../api"

const Test3 = () => {
    // ? 组件要点
    // * 1. 空根节点
    // * 2. hooks: useEffect
    // * 3. 解构赋值
    // * 4. interface -> updateData

    const [data, setData] = useState([]);
    const [ta, setTa] = useState(0);

    // * 不传递第二个参数 -> 每次render之后都会执行这个 useEffect
    // ! 模拟 componentDidUpdate
    useEffect(() => {
        console.log('%ccomponentDidUpdate', 'color: red;')
    });

    // * 传递 空数组[] -> 除了第一次挂在组件时会执行， 其他时间更新组件的时候不会执行
    // * 因为不依赖任何变量， 也就是依赖不会变更
    // ! 模拟 componentDidMount
    useEffect(() => {
        console.log('%ccomponentDidMount', 'color: green;');
        getData().then(res => {
            console.log(res);
            if (res.code === 0) {
                setData(res.data)
            }
        })

        // let res = await getData();
        // if (res.code === 0) {
        //     setData(res.data)
        // }
    }, []);

    // * 传递一个依赖数组 -> 只有在数组内的state 改变时才会执行
    useEffect(() => {
        console.log('ta来了~ta来了');
    }, [ta]);


    // * useEffect的第二个参数，是一个数组，就像一个依赖列表。当状态值发生变化时我们才进行解绑。
    // * 所以当传空数组时，也就是当组件被销毁时才进行解绑 变相实现了componentWillUnmount的生命周期
    // ! 模拟 componentWillUnmount
    useEffect( () => {
        return () => {
            console.log('%ccomponentWillUnmount', 'color: green;')
        }
    }, [])


    return (
        <>
            <p className="title">
                useEffect
            </p>
            <div>
                <button onClick={() => setData([...data, { 'key': Math.floor(Math.random()) + 1, 'area': 'ANYWHERE'}])}>改变data</button>
            </div>
            <ul>
                {data.map((item, index) => {
                    return <li key={ index }>{ item.area }</li>
                })}
            </ul>
        </>
    )
}

export default Test3;
