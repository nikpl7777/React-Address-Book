export default function (state = [], action) {

    switch (action.type) {
        
        case 'ADD_CONTACT':
            const id = (state.length ? Math.max.apply(
                Math, state.map(i=> i.id)) : 0
            ) + 1;

            return [...state, {
                name: action.name,
                email: action.email,
                id,
            }];

        case 'REMOVE_CONTACT':
            return state.filter(item => item.id !== action.id);

        case 'UPDATE_CONTACT':
            return state.map(item => item.id === action.id ? {
                ...item,
                name: action.name,
                email: action.email,
            } : item);

        default:
            return state;
    }
}