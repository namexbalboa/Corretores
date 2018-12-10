import firebase from '../FBCONN';

export const NotificacoesList = () => {
    return (dispatch) => {
        firebase.database().ref('corretores').once('value')
            .then((snapshot)=>{

            let notificacoes = [];

            snapshot.forEach((childSnapshot)=>{
                notificacoes.push({
                    key:childSnapshot.key,
                    creci:childSnapshot.val().creci,
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