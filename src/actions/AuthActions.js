import firebase from '../FBCONN';

export const SignOut = () => {
    firebase.auth().signOut();

    return {
        type: 'changeStatus',
        payload:{
            status:2
        }
    };
}

export const checkLogin = () => {
    return (dispatch) => {
        firebase.database().ref('corretores').once('value')
            .then((snapshot)=>{

            let corretor = [];
            
            snapshot.forEach((childSnapshot)=>{
                corretor.push({
                    key:childSnapshot.key,
                    creci:childSnapshot.child('uidCorretor').val().creci,
                    senha:childSnapshot.child('uidCorretor').val().senha,
                });
            });
            
            if(1 == 1){
                dispatch({
                    type:'changeStatus',
                    payload:{
                        status:1
                    }
                })
            }else{
                dispatch({
                    type:'changeStatus', 
                    payload:{
                        status:2 
                    }
                });
            }
        });
    }
}
 
//LOGIN USUARIO
export const SignInAction = (email, password) => {
    return (dispatch) => {

                if(1 == 1){
                    dispatch({
                        type:'changeStatus',
                        payload:{
                            status:1
                        }
                    })

                }else{
                    dispatch({
                        type:'changeStatus', 
                        payload:{
                            status:2
                        }
                    });
                }
   
    };
};


export const changeName = (name) => {
    return{
        type:'changeName',
        payload:{
            name:name
        }
    };
};

export const changeEmail = (email) => {
    return{
        type:'changeEmail',
        payload:{
            email:email
        },
    };
};

export const changePassword = (password) => {
    return{
        type:'changePassword',
        payload:{
            password:password
        }
    };
};