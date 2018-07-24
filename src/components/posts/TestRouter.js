import React, { Component } from 'react';

export class TestRouter extends Component {
    render() {
        return(
            <p>Test router: {this.props.match.params.postId}</p>
        );
    }
}