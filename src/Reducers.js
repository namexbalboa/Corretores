import { combineReducers } from 'redux';
import AuthReducer from './reducers/AuthReducer';
import NotificacoesReducer from './reducers/NotificacoesReducer';

const Reducers = combineReducers({
    auth:AuthReducer,
    notificacoes:NotificacoesReducer
});

export default Reducers; 