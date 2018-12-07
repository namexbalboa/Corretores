import React, {Component} from 'react';
import { Animated, Dimensions, Keyboard, StyleSheet, TextInput, UIManager, Image, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import KeyboardShift from '../../Components/KeyboardShift';
import { checkLogin, changeEmail, changePassword, SignInAction } from '../../actions/AuthActions';

export class Login extends Component{
     
    static navigationOptions = {
        title: '',
        header:null
    }

    constructor(props){
        super(props);
        this.state = {

        };

        this.Button = this.Button.bind(this);
    }

    //Quando faz a ação
   componentDidUpdate(){
    if(this.props.status == 1) {
        Keyboard.dismiss();
        this.props.navigation.navigate('Home');
    }
}
    
    Button(){
        this.props.navigation.navigate('Preload');
    }
    
    render() {
        return (
            <KeyboardShift>
                {() => (
                    <View style={styles.container}>
            
                    <Image source={require('../../../assets/user.png')} style={styles.img}/>
                    <Text style={styles.lbl}>CRECI</Text>
                    <TextInput style={styles.inp} value={this.props.email} onChangeText={this.props.changeEmail}/>
                    <Text style={styles.lbl}>Senha</Text>
                    <TextInput secureTextEntry={true} style={styles.inp} value={this.props.password} onChangeText={this.props.changePassword}/>
                    
                    <View style={styles.btnMargin}>
                    <Button title="Acessar" color="purple" onPress={()=>{
                        this.props.SignInAction(this.props.email, this.props.password);
                    }}/>
                    </View>
                
          
                <Text style={styles.lbl}>Usuário Logado: {this.props.uid}</Text>
                <Text style={styles.lbl}>Status: {this.props.status}</Text>
         

                </View> 
            )}
            </KeyboardShift>
        );
    }

}

const styles = StyleSheet.create({
    img:{
        justifyContent:'center',
        alignItems: 'center',
      },
      container:{
        flex: 1,
        width: null,
        alignItems:'center',
        justifyContent: 'flex-start',
        backgroundColor: 'rgba(0,0,0,0.1)',
        paddingTop: 30,
        backgroundColor: 'lightblue'
      }, 
      content:{
        width: '100%',
        alignItems:'center',
        justifyContent: 'center',
        paddingTop: 30,
      },
      lbl:{
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 18,
        color:'white'
      },
      inp:{
        paddingLeft:14,
        paddingRight:14,
        margin: 10,  
        backgroundColor: 'white',
        borderRadius: 15,
        height: 40,
        width:'80%', 
        fontSize: 17,
      },
      btnMargin:{
        paddingTop: 20,
      }
});

const mapStateToProps = (state) => {
    return{

        status:state.auth.status,
        uid:state.auth.uid,
        email:state.auth.email,
        password:state.auth.password

    };
};

const LoginConnect = connect(mapStateToProps, { checkLogin, changeEmail, changePassword, SignInAction })(Login);
export default LoginConnect;