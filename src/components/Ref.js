import React from 'react';

class RefTest extends React.Component{
    constructor(props){
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount(){
        console.log(this.myRef.current);
    }

    render(){
        return <input ref={this.myRef} />
    }
}
export default RefTest;
