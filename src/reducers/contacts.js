export default function (state = [], action) {

    switch (action.type) {
        
        case 'ADD_CONTACT':
            return [...state, {
                name: action.name,
                email: action.email,
                key: action.key,
            }];

        case 'REMOVE_CONTACT':
            return state.filter(item => item.key !== action.key);

        case 'RESET_CONTACTS':
            return [...action.list];

        case 'UPDATE_CONTACT':
            return state.map(item => item.key === action.key ? {
                ...item,
                name: action.name,
                email: action.email,
            } : item);

        default:
            return state;
    }
}