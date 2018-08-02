import { connect } from 'react-redux';

import { remove } from '../actions/contacts';
import { set } from '../actions/filter';

import PageList from '../components/PageList';

const mapStateToProps = state=> {

    return {
        list: state.contacts.filter(
            i=> i.name.indexOf(state.filter) >= 0 || i.email.indexOf(state.filter) >= 0
        ),
        filter: state.filter,
    }
};

const mapDispatchToProps = dispatch => ({
    onRemove: id=> dispatch(remove(id)),
    setFilter: filter=> dispatch(set(filter)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageList);