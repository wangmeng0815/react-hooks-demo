import React, { useEffect, useRef, useLayoutEffect } from 'react';

/**
 * 应用场景
 */

// ? 演示方法 切换路由 仔细观察 黑色容器闪现
export default () => {
    const boxRef = useRef(null);

    // !
    // useLayoutEffect(() => {
    useEffect(() => {
        boxRef.current.style.left = "300px";
    }, []);
    return (
        <div className="box">
            <h3>useLayoutEffect</h3>
            <div className="red">{`useLayoutEffect是同步执行，时机在渲染之后但在屏幕更新之前。`}</div>
            <div className="title">{`流程如下:`}</div>
            <div>{`以某种方式触发了rerender(改变state，或者父组件发生rerender)`}</div>
            <div>{`React渲染组件(调用组件函数)`}</div>
            <div>{`useLayoutEffect运行，React等待它完成`}</div>
            <div>{`屏幕在视觉上更新(真实dom操作)`}</div>
            <div
                ref={boxRef}
                style={{
                    position: "absolute",
                    width: 100,
                    height: 100,
                    background: "black",
                }}
            ></div>
        </div>
    );
};
