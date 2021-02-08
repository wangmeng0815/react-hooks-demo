import React from 'react';
import { useWinSize } from './UseWinSize.js';

export default () => {

    const size = useWinSize();
    return (
        <>
            <h3>自定义组件</h3>
            <div className="title blue">自定义 Hooks 函数偏向于功能，而组件偏向于界面和业务逻辑。</div>
            <div>页面大小: {size.width} * {size.height}</div>
        </>
    )
}
