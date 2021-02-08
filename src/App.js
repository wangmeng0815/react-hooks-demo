import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header.js';
import ClassComponent from './components/ClassComponent.js';
import Test1 from './components/Test1.js';
import ErrorComp from './components/Error.js';
import Ref from './components/Ref.js';

import UseState from './hooks/UseState.js';
import UseEffect from './hooks/UseEffect.js';
import Memo from './hooks/useMemo/Index.js';
import Simple from './components/Simple.js';

import UseCallback from './hooks/UseCallback.js';
import UseReducer from './hooks/UseReducer.js';
import UseRef from './hooks/UseRef.js';

import UseContext1 from './hooks/useContext/UseContext1.js';
import UseContext2 from './hooks/useContext/UseContext2.js';
import UseImperativeHandle from './hooks/useImperativeHandle/Index.js';
import UseLayout from './hooks/useLayoutEffect/Index.js';
import CustomHook from './hooks/customHook/Index.js';

import './style.css'
class App extends Component {
    constructor(props) {
        super(props);
    }
    // ? simple
    // render() {
    //     const store = this.props.store;
    //     const addFunc = this.props.addFunc;
    //     const reduceFunc = this.props.reduceFunc;
    //     const num = store.getState();
    //     return (
    //         <div className="container">
    //             <h1>现在这个值是，{num}</h1>
    //             <button onClick={() => store.dispatch(addFunc())}>加加加</button>
    //             <button onClick={() => store.dispatch(reduceFunc())}>减减减</button>
    //         </div>
    //     )
    // }

    // ? redux
    // render() {
    //     const { store, addFunc, reduceFunc, asyncAddFunc, asyncReduceFunc } = this.props;
    //     return (
    //         <div className="container">
    //             <Header />
    //             <Switch>
    //                 <Route exact path='/basic' >
    //                     <ClassComponent store={store} addFunc={addFunc} reduceFunc={reduceFunc} asyncAddFunc={asyncAddFunc} asyncAddFunc={asyncAddFunc} asyncReduceFunc={asyncReduceFunc}></ClassComponent>
    //                 </Route>
    //                 <Route path='/test1' component={Test1} />
    //                 <Route path='/usestate' component={UseState} />
    //                 <Route path='/useeffect' component={UseEffect} />
    //                 <Route path='/error' component={ErrorComp} />
    //                 <Route path='/simple' component={Simple} />
    //                 <Route path='/usecallback' component={UseCallback} />
    //                 <Route path='/memo' component={Memo} />
    //             </Switch>
    //         </div>
    //     );
    // }

    // ? react-redux
    render() {
        return (
            <div className="container">
                <Header />
                <Switch>
                    <Route exact path='/basic' >
                        <ClassComponent></ClassComponent>
                    </Route>
                    <Route path='/test1' component={Test1} />
                    <Route path='/error' component={ErrorComp} />
                    <Route path='/simple' component={Simple} />
                    <Route path='/ref' component={Ref} />

                    <Route path='/usestate' component={UseState} />
                    <Route path='/useeffect' component={UseEffect} />
                    <Route path='/memo' component={Memo} />

                    <Route path='/usecallback' component={UseCallback} />
                    <Route path='/usereducer' component={UseReducer} />
                    <Route path='/useref' component={UseRef} />

                    <Route path='/usecontext1' component={UseContext1} />
                    <Route path='/usecontext2' component={UseContext2} />
                    <Route path='/useimperativehandle' component={UseImperativeHandle} />
                    <Route path='/uselayout' component={UseLayout} />
                    <Route path='/customhook' component={CustomHook} />
                </Switch>
            </div>
        )
    }
}

export default App;
