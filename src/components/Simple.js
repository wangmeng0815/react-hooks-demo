import React from 'react';

const Simple = () => {
    console.log('来自simple组件的问候')
    return (
        <div className="box">
            <p>最基础的函数组件</p>
            <p>不依赖任何数据</p>
            <p>通过用memo包裹组件, 不必每次都render的性能优化</p>
        </div>
    )
}

export default Simple;
