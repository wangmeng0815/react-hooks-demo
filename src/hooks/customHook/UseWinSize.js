import React, { useEffect, useState, useCallback } from 'react';

export const useWinSize = () => {
    // 1. 初始化窗口大小state
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    });


    const changeSize = useCallback( () => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        });
    }, []);

    // 2. 使用useEffect在组件创建时监听resize事件，resize时重新设置state (使用useCallback节流)
    useEffect( () => {
        // ? 绑定一次页面监听事件 组件销毁时解绑
        window.addEventListener('resize', changeSize);

        return () => {
            window.removeEventListener('resize', changeSize);
        }
    }, [])

    return size;
}
