// import React from "react";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <div>
                <nav>
                    <h2 className="title">Basic:</h2>
                    <Link to='/basic' className="nav">ClassComponent</Link>
                    <Link to='/test1' className="nav">PureComponent</Link>
                    <Link to='/error' className="nav">Catch</Link>
                    <Link to='/simple' className="nav">FunctionComponent</Link>
                    <Link to='/ref' className="nav">Ref</Link>
                </nav>
            </div>
            <div>
                <nav>
                    <h2 className="title">Hooks:</h2>
                    <Link to='/usestate' className="nav">useState</Link>
                    <Link to='/useeffect' className="nav">useEffect</Link>
                    <Link to='/memo' className="nav">memo</Link>
                    <Link to='/usecallback' className="nav">useCallback</Link>
                    <Link to='/usereducer' className="nav">useReducer</Link>
                    <Link to='/useref' className="nav">useRef</Link>

                    <Link to='/usecontext1' className="nav">useContext1</Link>
                    <Link to='/usecontext2' className="nav">useContext2</Link>
                    <Link to='/useimperativehandle' className="nav">useImperativeHandle</Link>
                    <Link to='/uselayout' className="nav">useLayoutEffect</Link>
                    <Link to='/customhook' className="nav">自定义hook</Link>
                </nav>
            </div>
        </>

    );
};

export default Header;
