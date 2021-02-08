import React, { PureComponent } from 'react';

class Pure extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.group('%cPure-componentDidMount', 'color: red;');
        console.groupEnd();
    }

    componentDidUpdate(perProps, perState, perCustom) {
        // ? 每次UI更新被调用
        // * 典型场景： 页面通过props重新获取数据

        console.group('%cPure-componentDidUpdate', 'color: red;');
        console.log('perProps', perProps);
        console.log('perState', perState);
        console.groupEnd();
    }

    componentWillUnmount() {
        console.group('%cPure-componentWillUnmount', 'color: red;');
        console.groupEnd();
    }

    render() {
        const { items, val } = this.props;
        return (
            <div className="box">
                <p>PureComponent</p>
                <div>
                    <span>数组: </span>
                    <span>{ items }</span>
                </div>
                <div>
                    <span>数值: </span>
                    <span>{ val }</span>
                </div>
            </div>
        )
    }
}

export default Pure;
