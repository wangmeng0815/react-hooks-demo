import React from 'react';

const Child = ({count, onChange}) => {
    console.log('子组件更新')
    return (
        <>
            <div>
                <span>count: </span>
                <span>{ count }</span>
            </div>
            <div>
                <input type="text" onChange={onChange} />
            </div>
        </>
    );
};

export default Child;
