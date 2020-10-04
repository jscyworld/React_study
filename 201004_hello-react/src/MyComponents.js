import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponents extends Component {
    static defaultProps = {
        name: "John Appleseed",
    }
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }
    render() {
        return (
            <div>
                <p>Hello. My name is { this.props.name }.</p>
                <p>I'm { this.props.age } years old.</p>
            </div>
        );
    }
}

export default MyComponents;