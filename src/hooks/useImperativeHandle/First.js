import React, { forwardRef, useImperativeHandle, useRef, useState, useCallback } from 'react';

const TestInput = forwardRef((props, ref) => {
    return <input type="text" ref={ref} />
});

export default () => {
    const childRef = useRef(null);

    const getFocus = () => {
        childRef.current.focus();
    }

    return (
        <div className="box">
            <div>{ `通过forwardRef可以将ref转发给子组件` }</div>
            <div>{ `子组件拿到父组件创建的ref, 绑定到自己的某一个元素中` }</div>
            <div>{ `<TestInput ref={childRef}></TestInput>` }</div>

            <div>
                <TestInput ref={childRef}></TestInput><button onClick={ getFocus }>聚焦</button>
            </div>
            <div className="red">{`直接暴露给父组件带来的问题是某些情况的不可控`}</div>
            <div className="red">{`父组件可以拿到DOM后进行任意的操作, 我们只是希望父组件可以操作的focus，其他并不希望它随意操作其他方法`}</div>
        </div>
    )
}
