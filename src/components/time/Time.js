import React, { Component } from 'react';

export class Time extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }
    render() {
        return(
            <div>
                <h3>{this.state.time}.</h3>
            </div>
        );
    }
    componentDidMount(){
        this.setState({time: new Date().toLocaleTimeString()});
        setInterval(this.componentDidMount.bind(this), 1000);
    }
}