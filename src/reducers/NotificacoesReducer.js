const initialState = {
    lista:[],
};
 
const NotificacoesReducer = (state = initialState, action) => {

    if(action.type == 'setNotificacoesList') {
        return {...state, lista:action.payload.notificacoes};
    }

    return state;

};

export default NotificacoesReducer;