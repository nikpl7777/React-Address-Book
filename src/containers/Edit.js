import { connect } from 'react-redux';

import { update, remove } from '../actions/contacts';
import PageItem from '../components/PageItem';

import { push } from 'connected-react-router';

const mapStateToProps = state=> {

    // Todo: Find better solution instead of regexp
    const id = parseInt(/contacts\/(\d+)$/.exec(state.router.location.pathname)[1]);
    
    return {
        ...state.contacts.filter(item=> item.id === id)[0]
    }
};

const mapDispatchToProps = dispatch => ({
    onSave: (id, name, email)=> {
        dispatch(update(id, name, email));
        dispatch(push('/'));
    },

    onRemove: id=> {
        dispatch(remove(id));
        dispatch(push('/'));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageItem);