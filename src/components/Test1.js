import React, { Component } from 'react';
import Refer from './Refer.js';
import Pure from './Pure.js';
class Test1 extends Component {
    // ? 对比Component和PureComponent
    // * 1. 生命周期的加深理解
    // * 2. PureComponent 浅比较
    // * 3. 规避 pureComponent 浅比较
    // * 4. 父子生命周期的先后执行顺序

    constructor(props) {
        super(props);
        this.state = {
            items: ['a'],
            value: 0
        }
        this.handleClick2 = this.handleClick2.bind(this);
    }

    handleClick1 = () => {
        const { items } = this.state;
        // items.push('b');
        // this.setState({
        //     items
        // })


        // // ! 规避 pureComponent浅比较
        this.setState(prevState => ({
            items: [...prevState.items, 'b'],
        }));
        console.log(this.state)
    }

    handleClick2() {
        this.setState({
            value: Math.floor(Math.random() * 10) + 1
        });
        console.log(this.state)
    }

    render() {
        const { items, value } = this.state;
        return (
            <div className="outer_box">
                <Refer items={items} val={value} />
                <Pure items={items} val={value} ></Pure>

                <button className="btn btn_click" onClick={this.handleClick1}>触发数组改变</button>
                <button className="btn btn_click" onClick={this.handleClick2}>触发数值改变</button>
            </div>
        )
    }

    componentDidMount() {
        console.group('%cParent-componentDidMount', 'color: blue;')
        console.groupEnd()
    }

    componentDidUpdate() {
        console.group('%cParent-componentDidUpdate', 'color: blue;')
        console.groupEnd()
    }

    componentWillUnmount() {
        console.group('%cParent-componentWillUnmount', 'color: blue;')
        console.groupEnd()
    }

}

export default Test1;
