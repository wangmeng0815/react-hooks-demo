import React, { memo, useState, useCallback } from 'react';

// ! useCallback
// ! 目的：1.减少render次数；2. 减少计算量

// ? 思路
/**
 * 1. 点击事件handleClick1触发时， B组件也会重新渲染， 当B组件比较耗时时， 就会造成性能问题
 * 2. B组件重新渲染的原因在于: 每次重新渲染, onClick都会重新定义, 即上次与这次的不一致
 * 3. 思路：通过useCallback包裹onClick来达到缓存的效果， 即useCallback的依赖项不变时不重新生成
 * 4. 通过memo方法包裹B组件， 并且通过useCallback包裹B组件的onClick方法，memo与pureComponent类似（对传入组件的数据浅比较），useCallback则会保证handleClick2不会发生变化
 */

function A(props) {
    const { onClick, children } = props;
    console.log('来自A组件', props)
    return (
        <div className="box" onClick={onClick}>
            <h3>A组件</h3>
            <div>a: {children}</div>
        </div>
    )
}

function B(props) {
    const { onClick, children } = props;
    console.log('来自B组件', props)
    return (
        <div className="box" onClick={onClick}>
            <h3>B组件(对照组件)</h3>
            <div>{ `<Bmemo onClick={ handleClick2 }>{b}</Bmemo>` }</div>
            <p className="red">应用了memo包裹组件后，尽管没有数据依赖更新，但是仍然每次会触发render</p>
            <h4 className="red">B组件绑定有onClick事件，所以尽管数据浅比较通过，但是onClick是一个引用，所以依然会触发重新渲染</h4>
            <div>b: {children}</div>
        </div>
    )
}

function Temp({ onClick, name }) {
    console.log('来自C组件');
    return (
        <div className="box" onClick={onClick}>
            <h3>memo + useCallback 组件</h3>
            <div>{ `<C onClick={ handleClick3 } name={c} />` }</div>
            <div>c: {name}</div>
        </div>

    )
}

const Bmemo = memo(B)
const C = memo(Temp);

const useCallBack = () => {
    // ? 性能优化 hooks: useCallback
    // * 在使用值和函数的情况，需要考虑有没有函数传递给子组件使用useCallback

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    const handleClick1 = () => {
        setA(a + 1);
    }

    const handleClick2 = () => {
        setB(b + 1)
    }

    const handleClick3 = useCallback(() => {
        setC(c + 1);
    }, [c])

    return (
        <>
            <div >
                <div>1. 点击事件handleClick1触发时， B组件也会重新渲染， 当B组件比较耗时时， 就会造成性能问题</div>
                <div>2. B组件重新渲染的原因在于: 每次重新渲染, onClick都会重新定义, 即上次与这次的不一致</div>
                <h4>3. 思路：通过useCallback包裹onClick来达到缓存的效果， 即useCallback的依赖项不变时不重新生成</h4>
                <h4>4. 通过memo方法包裹组件， 并且通过useCallback包裹组件的onClick方法，memo与pureComponent类似（对传入组件的数据浅比较），useCallback则会保证handleClick不会发生变化</h4>
            </div>
            <A onClick={ handleClick1 }>{a}</A>
            {/* <Bmemo>{b}</Bmemo> */}
            <Bmemo onClick={ handleClick2 }>{b}</Bmemo>
            <C onClick={ handleClick3 } name={c} />
        </>
    );
}

export default useCallBack;
