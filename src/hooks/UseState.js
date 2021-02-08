import React, { useState } from 'react';
/**
 * 函数组件
 */
const Test2 = () => {
    // ? 组件要点
    // * 1. 函数组件
    // * 2. React.Fragment
    // * 3. hooks: useState
    // * 4. 解构赋值 扩展运算符的应用

    const initialValue = 0;
    const [ count, setCount ] = useState(initialValue);
    const [ name, setName ] = useState({ firstName: '', lastName: '' });
    const [ items, setItems ] = useState([]);

    const addItem = () => {
        setItems([
            ...items,
            {
                id: items.length,
                val: Math.floor(Math.random() * 10) + 1
            }
        ]);
    };

    return (
        <React.Fragment>
            <p className="title">
                useState
            </p>

            <section>
                <h3>Count: { count }</h3>
                <div>
                    <button className="btn" onClick={() => setCount(initialValue)}>reset</button>
                    <button className="btn" onClick={() => setCount( (oldVal) => oldVal + 1 )}>add</button>
                    <button className="btn" onClick={() => setCount( (oldVal) => oldVal - 1 )}>reduce</button>
                </div>
            </section>

            <section>
                <h3>FirstName: { name.firstName }</h3>
                <h3>LastName: { name.lastName }</h3>
                <div>
                    <label>FirstName: </label>
                    <input type='text' value={ name.firstName } onChange={ (e) => setName({ ...name, firstName: e.target.value })} />
                </div>
                <div>
                    <label>LastName: </label>
                    <input type='text' value={ name.lastName } onChange={ (e) => setName({ ...name, lastName: e.target.value })} />
                </div>
            </section>

            <section>
                <button onClick={ addItem }>Add Item</button>
                <ul>
                    {items.map((item) => {
                        return <li key={ item.id }>{ item.val }</li>
                    })}
                </ul>
            </section>

        </React.Fragment>
    );
}

export default Test2;
