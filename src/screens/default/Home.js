import React, {Component} from 'react';
import { Animated, Dimensions, Keyboard, StyleSheet, TextInput, UIManager, Image, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

export class Home extends Component{
     
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
    
    Button(){
        this.props.navigation.navigate('Preload');
    }
    
    render() {
        return (
                <View style={styles.container}>
            
                    <Text>Logado com sucesso</Text>
                    <Button title="Voltar" color="purple" onPress={Button()}/>

                </View>

        );
    }

}

const styles = StyleSheet.create({
      container:{
        flex: 1,
        width: null,
        alignItems:'center',
        justifyContent: 'flex-start',
        backgroundColor: 'red',
        paddingTop: 30,
        backgroundColor: 'lightblue'
      }, 
});

const mapStateToProps = (state) => {
    return{
        
    };
};

const HomeConnect = connect(mapStateToProps, {})(Home);
export default HomeConnect;