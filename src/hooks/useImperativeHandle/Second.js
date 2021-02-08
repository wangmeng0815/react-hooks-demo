import React, { useRef, forwardRef, useImperativeHandle } from 'react'

const TestInput = forwardRef((props, ref) => {
    const inputRef = useRef();
    // 作用: 减少父组件获取的DOM元素属性,只暴露给父组件需要用到的DOM方法
    // 参数1: 父组件传递的ref属性
    // 参数2: 返回一个对象,父组件通过ref.current调用对象中方法
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus()
        },
    }))
    return <input type="text" ref={inputRef} />
})

export default () => {
    // useImperativeHandle 主要作用:用于减少父组件中通过forward+useRef获取子组件DOM元素暴露的属性过多
    // 为什么使用: 因为使用forward+useRef获取子函数式组件DOM时,获取到的dom属性暴露的太多了
    // 解决: 使用uesImperativeHandle解决,在子函数式组件中定义父组件需要进行DOM操作,减少获取DOM暴露的属性过多
    const el = useRef();

    return (
        <div className="box">
            <div>{`通过useImperativeHandle的Hook, 将父组件传入的ref和useImperativeHandle第二个参数返回的对象绑定到了一起`}</div>
            <div>{`所以在父组件中, 调用inputRef.current时, 实际上是返回的对象`}</div>
            <div>
                <TestInput ref={el} /><button onClick={() => el.current.focus()}>聚焦</button>
            </div>
        </div>
    )
}
