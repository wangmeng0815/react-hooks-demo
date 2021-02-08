import React, { Component } from 'react';

class Refer extends Component{
    constructor(props){
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    render() {
        return (
            <div className="box">
                <p>Component</p>
                <div>
                    <span>数组: </span>
                    <span>{ this.props.items }</span>
                </div>
                {/* // ! 这里有个小坑 */}
                <div>同一节点下的数组: { this.props.items }</div>
                <div>
                    <span>数值: </span>
                    <span>{ this.props.val }</span>
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.group('%cNormal-componentDidMount', 'color: green;');
        console.groupEnd();
    }

    componentDidUpdate(perProps, perState, perCustom) {
        // ? 每次UI更新被调用
        // * 典型场景： 页面通过props重新获取数据

        console.group('%cNormal-componentDidUpdate', 'color: green;');
        console.log('perProps', perProps);
        console.log('perState', perState);
        console.groupEnd();
    }

    componentWillUnmount() {
        console.group('%cNormal-componentWillUnmount', 'color: green;');
        console.groupEnd();
    }
}

export default Refer;
