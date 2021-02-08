import React, { useMemo } from 'react';

const Temp = ({ count, items }) => {
    // ? 最简单的函数组件
    // * 属性传递
    // * 使用useMemo对count进行包裹,这时候改变父组件items就不会导致count重新渲染了

    const changeEvent = (_count) => {
        console.log('%cCount发生了变化', 'color: red;');
        return _count + 1;
    }

    // const newCount = changeEvent(count);
    const newCount = useMemo(() => changeEvent(count), [count]);
    const temp = `<UseMemo count={count} items={items} />`;
    return (
        <div className="box">
            <h3>useMemo</h3>
            <div>{ temp }</div>
            <div className="red">使用useMemo对父组件传入子组件的值(count)进行包裹， 这时候改变父组件items就不会导致count重新渲染了</div>
            {/* <div>
                <span>count</span>
                <span>{ count }</span>
            </div> */}
            <div>
                <span>newCount: </span>
                <span>{ newCount }</span>
            </div>
            <ul>
                {items.map((item) => {
                    return <li key={ item.id }>{ item.val }</li>
                })}
            </ul>
        </div>
    )
}

export default Temp;
