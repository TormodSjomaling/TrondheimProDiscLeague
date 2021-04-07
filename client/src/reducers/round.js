const roundReducer = (rounds = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE_ROUND':
            return [...rounds, action.payload];
            
        default:
            return rounds;
    }
}

export default roundReducer;
