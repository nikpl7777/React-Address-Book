import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default class Page extends Component {

    render() {
        return <main className="b-page">
            <header className="b-page__header">
                <h1 className="b-page__title">
                    <Link to="/">My Address Book</Link>
                    { this.props.title ? ' / ' + this.props.title : '' }
                </h1>
            </header>
            
            <section className="b-page__content">
                { this.props.children }
            </section>
        </main>;
    }
}

Page.propTypes = {
    title: PropTypes.string,
}