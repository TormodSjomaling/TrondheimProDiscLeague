import * as api from '../api'

export const getRounds = () => async (dispatch) => {
    try {
        const { data } = await api.fetchRounds(); 

        dispatch({ type: 'FETCH_ALL', payload: data });

    } catch (error) {
        console.log(error.message)
    }
}

export const createRound = (round) => async (dispatch) => {
    try {
        const { data } = await api.addRound(round); 

        dispatch({ type: 'CREATE_ROUND', payload: data });

    } catch (error) {
        console.log(error.message)
    }
}