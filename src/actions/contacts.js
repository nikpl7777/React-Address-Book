
export const create = (name, email)=> ({
    type: 'ADD_CONTACT',
    name,
    email,
});

export const update = (id, name, email)=> ({
    type: 'UPDATE_CONTACT',
    id,
    name,
    email,
});

export const remove = id=> ({
    type: 'REMOVE_CONTACT',
    id,
});