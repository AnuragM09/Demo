import {
    createStore,
    combineReducers
} from 'redux';

import loginreducer from './reducer/loginreducer';

const rootReducer = combineReducers({
    auth: loginreducer
});

const configurestore = () => {
    return createStore(rootReducer);
};

export default configurestore;