import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Page from './Page';
import Filter from './Filter';

import { Link } from 'react-router-dom';

export default class List extends Component {

    render() {
        return <Page>
            <Filter onChange={filter=> this.props.setFilter(filter)} value={this.props.filter}/>

            <ul className="b-list">
                { this.props.list.map(item=> 
                    <li key={item.key} className="b-list__item">
                        <button
                            className="b-list__remove"
                            onClick={()=> this.props.onRemove(item.key)}>
                            ✗
                        </button>

                        <h3 className="b-list__name">
                            <Link to={'contacts/' + item.key} title="Click to edit">{item.name}</Link>
                        </h3>
                        <span className="b-list__email">{item.email}</span>
                    </li>
                )}

                <li className="b-list__item b-list__item_add">
                    <Link className="b-list__add" to={'create'}>+</Link>
                </li>
            </ul>
        </Page>;
    }
}

List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    })).isRequired,
    onRemove: PropTypes.func.isRequired,
    setFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
}