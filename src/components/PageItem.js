import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Page from './Page';

import { name as nameValidator, email as emailValidator } from '../helpers/validator';

export default class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            email: this.props.email,
            nameValid: true,
            emailValid: true,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        }, ()=> this.validate());
    }

    handleSubmit() {
        if (!this.isValid()) {
            this.validate();
            return;
        }

        this.props.onSave(this.props.id, this.state.name, this.state.email)
    }

    handleRemove() {
        this.props.onRemove(this.props.id)
    }

    isValid() {
        return nameValidator(this.state.name) && nameValidator(this.state.name);
    }

    validate() {
        this.setState((prevState) => ({
            nameValid: nameValidator(prevState.name),
            emailValid: emailValidator(prevState.email),
        }));
    }

    render() {
        const title = (this.props.id ? 'Edit contact' : 'New contact');

        return <Page title={title}>
            <section className="b-form">
                <div className={'b-form__field ' + (this.state.nameValid ? '' : 'b-form__field_has-error')}>
                    <input
                        name="name"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        className="b-control" />
                    
                    <p className="b-form__error-message">Name cannot be empty</p>
                </div>

                <div className={'b-form__field ' + (this.state.emailValid ? '' : 'b-form__field_has-error')}>
                    <input
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        className="b-control" />
                    
                    <p className="b-form__error-message">Email should be valid</p>
                </div>

                {this.props.id &&
                    <button className="b-button b-button_remove" onClick={this.handleRemove}>Remove</button>
                }

                <button className="b-button" onClick={this.handleSubmit}>Save</button>
            </section>
        </Page>;
    }
}

Item.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    onSave: PropTypes.func.isRequired,
    onRemove: PropTypes.func,
}