import { connect } from 'react-redux';

import { asyncUpdate, asyncRemove } from '../actions/contacts';
import PageItem from '../components/PageItem';

import { push } from 'connected-react-router';

const mapStateToProps = state=> {

    // Todo: Find better solution instead of regexp
    const key = /contacts\/(.+)$/.exec(state.router.location.pathname)[1];

    return {
        ...state.contacts.filter(item=> item.key === key)[0],
        id: key,
    }
};

const mapDispatchToProps = dispatch => ({
    onSave: (key, name, email)=> {
        dispatch(asyncUpdate(key, name, email))
            .then(()=> dispatch(push('/')));
    },

    onRemove: key=> {
        dispatch(asyncRemove(key))
            .then(()=> dispatch(push('/')));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageItem);