import firebase from 'firebase';

export const create = (key, name, email)=> ({
    type: 'ADD_CONTACT',
    key,
    name,
    email,
});

export const update = (key, name, email)=> ({
    type: 'UPDATE_CONTACT',
    key,
    name,
    email,
});

export const remove = key=> ({
    type: 'REMOVE_CONTACT',
    key,
});

export const reset = list=> ({
    type: 'RESET_CONTACTS',
    list,
});

export const asyncReset = ()=> dispatch=> {
    return firebase.database().ref('contacts').once('value').then(snapshot=> {
        if (!snapshot.hasChildren()) return;

        const json = snapshot.toJSON();

        const list = Object.keys(json).map(
            key=> ({ ...json[key], key })
        );

        return dispatch(reset(list));
    }).catch(err=> {
        console.error(err);
        alert('Could not load initial list of contacts.');
    });
}

export const asynCreate = (name, email)=> dispatch=> {
    return firebase.database().ref('contacts').push({
        name, email
    }).then(response=> {
        return dispatch(create(response.key, name, email));
    }).catch(err=> {
        console.error(err);
        alert('Could not create new contact.');
    });
}

export const asyncUpdate = (key, name, email)=> dispatch=> {
    return firebase.database().ref('contacts').child(key).set({
        name, email
    }).then(()=> {
        return dispatch(update(key, name, email));
    }).catch(err=> {
        console.error(err);
        alert('Could not update the contact.');
    });
};

export const asyncRemove = (key)=> dispatch=> {
    return firebase.database().ref('contacts').child(key).remove().then(()=> {
        return dispatch(remove(key));
    }).catch(err=> {
        console.error(err);
        alert('Could not loat initial list of contacts');
    });
};