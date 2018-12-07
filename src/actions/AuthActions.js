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

    return(dispatch) => {

        firebase.auth().onAuthStateChanged((user)=>{
    
            if(user) {
                //Usuario Esta logado
                dispatch({
                    type:'changeUid',
                    payload:{
                        uid:user.uid
                    }
                });
            }else{
                //usuario nao esta logado
                dispatch({
                    type:'changeStatus', 
                    payload:{
                        status:2
                    }
                });
            }
        });  
    }
}; 

 //CADASTRO USUARIO
export const signUpAction = (name, email, password)=>{
    return(dispatch) => {
       
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user)=>{
                
                let uid = firebase.auth().currentUser.uid;
                
                firebase.database().ref('users').child(uid).set({
                    name:name
                });

                dispatch({
                    type:'changeUid',
                    payload:{
                        uid:uid
                    }
                }); 
            })
            .catch((error)=>{
                
                switch(error.code){

                    case 'auth/email-alredy-in-use':
                        alert("Este e-mail já está cadastrado");
                    break;

                    case 'auth/invalid-email':
                        alert("E-mail inválido!");
                    break;

                    case 'auth/operation-not-allowed':
                        alert("Tente novamente mais tarde");
                    break;

                    case 'auth/weak-password':
                        alert("Senha deve conter no mínimo 6 caractéres!");
                    break;
                }

            });

    };
};


//LOGIN USUARIO
export const SignInAction = (email, password) => {
    return (dispatch) => {

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user)=>{
                    
                let uid = firebase.auth().currentUser.uid;
                
                dispatch({
                    type:'changeUid',
                    payload:{
                        uid:uid
                    }
                }); 
            })
            .catch((error) => {
                switch(error.code){

                    case 'auth/invalid-email':
                        alert("E-mail inválido!");
                    break;

                    case 'auth/user-disabled':
                        alert("Usuário desativado!");
                    break;

                    case 'auth/user-not-found':
                        alert("E-mail não encontrado!");
                    break;

                    case 'auth/wrong-password':
                        alert("E-mail e/ou senha incorretos!");
                    break;
                }

            });

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