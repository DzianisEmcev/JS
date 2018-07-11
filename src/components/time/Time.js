import React, { Component } from 'react';

export class Time extends Component {

    render() {
        return(
            <div>
                <h3>{this.state.time}.</h3>
            </div>
        );
    }

    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount(){
        this.setState({time: new Date().toLocaleTimeString()});
        setInterval(this.componentDidMount.bind(this), 1000);
    }
}