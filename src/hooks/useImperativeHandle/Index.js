import React, { forwardRef, useImperativeHandle, useRef, useState, useCallback } from 'react';
import { Route } from 'react-router-dom';
import First from './First.js';
import Second from './Second.js';
import Third from './Third.js';

// * useImperativeHandle可以让你在使用ref时自定义暴露给父组件的实例值。
// ! 在大多数情况下，应当避免使用ref这样的命令式代码。
// ? useImperativeHandle应当与forwardRef一起使用。

/**
 * useImperativeHandle
 * useImperativeHandle可以让你在使用ref时自定义暴露给父组件的实例值。
 * 在大多数情况下，应当避免使用ref这样的命令式代码。
 * useImperativeHandle应当与forwardRef一起使用。
 * 作用: 减少暴露给父组件获取的DOM元素属性, 只暴露给父组件需要用到的DOM方法
 * 参数1: 父组件传递的ref属性
 * 参数2: 返回一个对象, 以供给父组件中通过ref.current调用该对象中的方法
 */
const TestInput = forwardRef((props, ref) => {
    return <input type="text" ref={ref} />
});

export default () => {
    return (
        <>
            <h3>useImperativeHandle</h3>
            <div className="green">{ `作用: 减少暴露给父组件获取的DOM元素属性, 只暴露给父组件需要用到的DOM方法` }</div>
            <div className="blue">{ `参数1: 父组件传递的ref属性` }</div>
            <div className="blue">{ `参数2: 返回一个对象, 以供给父组件中通过ref.current调用该对象中的方法` }</div>
            <div>{`正常情况下 ref 是不能挂在到函数组件上的，因为函数组件没有实例`}</div>
            <div>{`useImperativeHandle 为我们提供了一个类似实例的东西。`}</div>
            <div>{`useImperativeHandle 的第 2 个参数，所返回的对象的内容挂载到 父组件的 ref.current 上`}</div>
            <div>{`forwardRef会创建一个React组件，这个组件能够将其接受的 ref 属性转发到其组件树下的另一个组件中。`}</div>
            <First  />
            <Second />
            <Third />
        </>
    )
}
