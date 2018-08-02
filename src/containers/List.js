import { connect } from 'react-redux';

import { asyncRemove } from '../actions/contacts';
import { set } from '../actions/filter';

import PageList from '../components/PageList';

const mapStateToProps = state=> {

    return {
        list: state.contacts.length ? state.contacts.filter(
            item=>
                item.name.indexOf(state.filter) >= 0
                || item.email.indexOf(state.filter) >= 0
                || item.key.indexOf(state.filter) >= 0
        ) : [],
        filter: state.filter,
    }
};

const mapDispatchToProps = dispatch => ({
    onRemove: key=> dispatch(asyncRemove(key)),
    setFilter: filter=> dispatch(set(filter)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageList);