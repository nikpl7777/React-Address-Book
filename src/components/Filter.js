import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.filter,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        }, ()=> {
            this.props.onChange(this.state.value);
        });
    }

    render() {
        return <div className="b-filter">
            <input
                type="text"
                value={ this.state.value || '' }
                onChange={ this.handleChange }
                className="b-filter__control"
                placeholder="Search..." />
        </div>;
    }
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
}