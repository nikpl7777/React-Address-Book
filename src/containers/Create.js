import { connect } from 'react-redux';

import { create } from '../actions/contacts';
import PageItem from '../components/PageItem';

import { push } from 'connected-react-router';

const mapStateToProps = ()=> ({
    name: '',
    email: '',
});

const mapDispatchToProps = dispatch => ({
    onSave: (id, name, email)=> {
        dispatch(create(name, email));
        dispatch(push('/'));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageItem);