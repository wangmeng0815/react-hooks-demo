import React from 'react';
import Target from './Target';

export default () => {
    return (
        <div>
            <div className="red">{ `useEffect是异步执行，而且是在渲染被绘制到屏幕之后执行。`}</div>
            <div className="title">{ `流程如下:`}</div>
            <div>{ `以某种方式触发了rerender(改变state，或者父组件发生rerender)`}</div>
            <div>{ `React渲染组件(调用组件函数)`}</div>
            <div>{ `屏幕在视觉上更新(真实dom操作)`}</div>
            <div>{ `然后useEffect运行 `}</div>
            <Target />
        </div>
    )
}
