import firebase from '../FBCONN';

export const NotificacoesList = () => {
    return (dispatch) => {
        firebase.database().ref('corretores').once('value')
            .then((snapshot)=>{

            let notificacoes = [];

            snapshot.forEach((childSnapshot)=>{
                notificacoes.push({
                    key:childSnapshot.key,
                    items:childSnapshot.child('uidCorretor').child('workflow').child('uidAnuncio').child('notificacoes').val().uidAnuncio,
                });
            });

            dispatch({
                type:'setNotificacoesList',
                payload:{
                    notificacoes:notificacoes
                }
            })

        });
    }
}