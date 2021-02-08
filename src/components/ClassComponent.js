import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addFunc, removeFunc, asyncAddFunc, asyncReduceFunc } from '../reducer/index.js';

/**
 * 类组件
 */
@connect(
    state => ({num: state}),        // ? 需要什么属性 放什么属性

    { addFunc, removeFunc, asyncAddFunc, asyncReduceFunc }   // ? 需要什么方法，放什么方法
)
class Test1 extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: [],
            type: 0,
        }
        this.asyncReduce = this.asyncReduce.bind(this);
    }
    add = () =>{
        let { store, addFunc } = this.props;
        store.dispatch(addFunc());
    }
    reduce() {
        let { store, reduceFunc } = this.props;
        store.dispatch(reduceFunc());
    }
    asyncAdd = () => {
        let { store, asyncAddFunc } = this.props;
        store.dispatch(asyncAddFunc());
    }
    asyncReduce() {
        let { store, asyncReduceFunc } = this.props;
        store.dispath(asyncReduceFunc());
    }

	render() {
        const { store, addFunc } = this.props;

        // ! redux
        // const num = store.getState();
		// return (
		// 	<div className="test1">
		// 		<p className="App-intro">
		// 			this is test1
		// 		</p>
        //         <h1>现在这个值是，{num}</h1>
        //         {/* // ? 同步加 */}
        //         <button onClick={()=>store.dispatch(addFunc())}>加加加</button>
        //         {/* // ? 同步减 */}
        //         <button onClick={ this.reduce.bind(this)} >减减减</button>
        //         {/* // ? 异步加 */}
        //         <button onClick={ this.asyncAdd }>等会儿加</button>
        //         {/* // ? 异步减 */}
        //         <button onClick={ this.asyncReduce }>等会儿减</button>
		// 	</div>
        // );

        // ! react-redux
        const num = this.props.num
        return (
            <div className="test1">
                <p className="App-intro">
		 			欢迎来到类组件
		 		</p>
                <h1>现在这个值是，{num}</h1>
                <button className="btn" onClick={ addFunc }>加加加</button>
                <button className="btn" onClick={ this.props.removeFunc } >减减减</button>
                <button className="btn" onClick={ this.props.asyncAddFunc }>等会儿加</button>
                <button className="btn" onClick={ this.props.asyncReduceFunc }>等会儿减</button>
            </div>
        );
    }

    // * 生命周期
    static getDerivedStateFromProps(nextProps, prevState) {
        // ? 1：当state需要从props初始化时，使用
        // ? 2：尽量不使用，维护俩者状态需要消耗额外资源，增加复杂度
        // ? 3：每次re-rendering之前被调用
        // * 典型场景： 表单获取默认值

        console.group('getDerivedStateFromProps');
        console.log('nextProps', nextProps);
        console.log('prevState', prevState);
        console.groupEnd();

        const { type } = nextProps;
        // 当传入的type发生变化的时候，更新state
        if (type != null && type !== prevState.type) {
            return {
                type,
            };
        }
        // 否则，对于state不进行任何操作
        return null;
    }
    /**componentWillMount() {
        // ! UNSAFE
        // ? 它代表的过程是组件已经经历了constructor()初始化数据后，但是还未渲染DOM时。
    }*/
    componentDidMount() {
        // ? UI渲染完成后调用
        // ? 只会执行一次
        // * 典型场景： 获取外部资源
        console.group('componentDidMount');
        console.groupEnd();
    }

    /**componentWillReceiveProps (nextProps){
        // ! UNSAFE
        // ? 在接受父组件改变后的props需要重新渲染组件时用到的比较多
        // ? 接受一个参数nextProps
        // ? 通过对比nextProps和this.props，将nextProps的state为当前组件的state，从而重新渲染组件
    }*/
    shouldComponentUpdate(nextProps, nextState) {
        // ? Vistual Dom是否重绘
        // ? 一般可以由PureComponent自动实现
        // * 典型场景： 性能优化

        console.group('shouldComponentUpdate');
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);
        console.groupEnd();

        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        // ! 基本用不到
        // ? 在render之前调用，state已更新
        // * 典型场景： 获取render之前的dom状态
        // * 通过getSnapshotBeforeUpdate方法，获取dom信息，然后通过componentDidUpdate反映

        console.group('getSnapshotBeforeUpdate');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        console.groupEnd();

        return {
            'fromSnapshot': 'wmTest'
        };
    }
    /*componentWillUpdate(nextProps,nextState) {
        // ! UNSAFE
        // ? 从来没用过
    }*/
    componentDidUpdate(perProps, perState, perCustom) {
        // ? 每次UI更新被调用
        // * 典型场景： 页面通过props重新获取数据

        console.group('componentDidUpdate');
        console.log('perProps', perProps);
        console.log('perState', perState);
        console.log('perCustom', perCustom);
        console.groupEnd();
    }

    componentDidCatch(err, info) {
        console.group('componentDidCatch');
        console.groupEnd();
    }
    componentWillUnmount() {
        // ? 组件被移除时调用
        // * 典型场景： 资源释放
        console.group('componentWillUnmount');
        console.groupEnd();
    }
}

// ! react-redex 普通调用方式
// const mapStateProps = (state) => {
//     return {num: state}
// }
// const actionCreate = { addFunc, removeFunc, asyncAddFunc, asyncReduceFunc };
// Test1 = connect(mapStateProps, actionCreate)(Test1);

export default Test1;
