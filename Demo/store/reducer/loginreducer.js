import {
    LOG_IN,LOG_OUT
} from '../actions/actiontypes';

const initialState = {
    isAuth: false,
    user: []
};

const loginreducer = (state = initialState, action) => {
    switch(action.type){
        case LOG_IN:
            return {
                ...state,
                isAuth: true,
                user: action.payload
            }
        case LOG_OUT:
            return {
                ...state,
                isAuth: false
            }
        default:
            return {
                ...state
            }
    }
};

export default loginreducer;