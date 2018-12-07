import React, {Component} from 'react';
import {StyleSheet, Button ,View, Text, Image, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';

export class Inicio extends Component{
     
    static navigationOptions = {
        title: '',
        header:null
    }

    constructor(props){
        super(props);
        this.state = {};

        this.Button = this.Button.bind(this);
    }


    Button(){
        this.props.navigation.navigate('Preload');
    }
    
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.title}>Seja bem-vindo(a) à plataforma </Text>

                <Text style={styles.title}>Olá:</Text>

                <View style={styles.btnArea}>

                    <TouchableHighlight style={styles.btn} underlayColor="rgba(255,255,255,0.6)" onPress={this.Button}>
                        <Text style={styles.lbl}>ALUGAR</Text>
                    </TouchableHighlight>

                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
      container:{
        flex: 1,
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor:'#F2E9E1',
      },
      title:{
          fontSize: 22,
          backgroundColor: 'transparent',
          fontWeight: 'bold',
          color: '#1C140D',
          paddingTop:80,
      },
      img:{
          width: 100,
          height: '20%',
      },
      btnArea:{
          width: '80%',
          justifyContent:'space-between',
          marginBottom: 20,
          marginTop: -25,
      },
      btn:{
        height: 40,  
        backgroundColor:'#CBE86B',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 3,
        marginBottom: 16,
      },
      lbl:{
        fontWeight:'bold',
        fontSize: 15,
        color: '#1C140D',

      }
});

const mapStateToProps = (state) => {
    return{
    };
};

const InicioConnect = connect(mapStateToProps, { })(Inicio);
export default InicioConnect;