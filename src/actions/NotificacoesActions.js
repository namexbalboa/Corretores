import firebase from '../FBCONN';

export const NotificacoesList = () => {
    return (dispatch) => {
   /*
        firebase().database().ref('anuncios').once('value')
            .then((snapshot)=>{

            let notificacoes = [];

            snapshot.forEach((childSnapshot)=>{
                notificacoes.push({
                    key:childSnapshot.key,
                    creci:childSnapshot.val().userUID
                });
            }); */
            let notificacoes = [];
            dispatch({
                type:'setNotificacoesList',
                payload:{
                    notificacoes:notificacoes
                }
            })
           
        //});
         
    }
}