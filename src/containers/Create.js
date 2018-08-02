import { connect } from 'react-redux';

import { asynCreate } from '../actions/contacts';
import PageItem from '../components/PageItem';

import { push } from 'connected-react-router';

const mapStateToProps = ()=> ({
    name: '',
    email: '',
});

const mapDispatchToProps = dispatch => ({
    onSave: (id, name, email)=> {
        dispatch(asynCreate(name, email)).then(()=> {
            dispatch(push('/'));
        });
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageItem);