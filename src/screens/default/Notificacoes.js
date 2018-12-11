import React, {Component} from 'react';
import {StyleSheet, FlatList, View, Text, ActivityIndicator, Switch} from 'react-native';
import { connect } from 'react-redux';
import NotificacoesItem from '../../Components/notificacoes/NotificacoesItem';
import { NotificacoesList } from '../../actions/NotificacoesActions';

export class Notificacoes extends Component {

  static navigationOptions = {
    title: '',
    tabBarLabel:'Notificacoes',
    header:null
  }

  constructor(props){
    super(props);
    this.state = { 
        loading: false,
        a: 'CARACA',
        switch1Value: false,
    };
  
    this.props.NotificacoesList();
    this.houseClick = this.houseClick.bind(this);
    this.funcao = this.funcao.bind(this);
    }

  componentWillReceiveProps() {
    setTimeout(() =>{
        this.setState({ loading: false })
    },
        2000)
    }

    houseClick(){
        
    }

    toggleSwitch1 = (value) => {
        this.setState({switch1Value: value})
        console.log('Switch 1 is: ' + value)
     }

    funcao(){

        console.log(this.props.lista);

        if(this.props.lista == 0) {

            this.setState ({a: 'CARALHO'});

        }else{
            
            this.setState ({a: 'BOSTA'});

        }
    }
  render() {

    return (
        <View style={styles.container}>
        {
            this.state.loading ?
            <View style={styles.load}>
                <ActivityIndicator size="large" />
            </View>
            :
            <View >

                <View style={styles.topBar}>
                
                    <View style={styles.topBarLeft}>
                        <Text style={styles.whiteText}>Nome e Sobrenome</Text>
                        <Text style={styles.whiteText}>Creci: 000000-RO</Text>
                    </View>

                    <View style={styles.topBarRight}>
                        <Text>Imagem</Text>
                    </View>

                </View>

            <View style={styles.statusBar}>
                
                <View style={styles.statusBarLeft}>
                    <Text> OFFLINE</Text>
                </View>

                <View style={styles.statusBarRight}>
                    <Text>Ativar {this.props.status}</Text>
                    <Switch
                        onValueChange = {this.toggleSwitch1}
                        value = {this.switch1Value}/>
                </View>

            </View>
            
            <View style={styles.adjust}>
                <FlatList 
                    data={this.props.lista}
                    windowSize={20}
                    renderItem={ ({item}) => <NotificacoesItem data={item} onPress={(this.houseClick)}/> } 
                />
            </View>
        </View>
        } 
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    load:{
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      alignItems: 'center'
    },
    topBar:{
        backgroundColor:'#ACBEF1',
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    topBarLeft:{
        padding: 10,
    },
    topBarRight:{
        padding: 10,
    },
    whiteText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    },
    statusBar:{
        backgroundColor:'#FF5858',
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    statusBarLeft:{
        padding: 10,
    },
    statusBarRight:{
        flexDirection: 'row',
        padding: 10,
    },
    adjust:{
        marginBottom: 200,
    },

})
const mapStateToProps = (state) => {
    return{
        status:state.auth.status,
        uid:state.auth.uid,
        lista:state.notificacoes.lista,
    };

};

const NotificacoesListConnect = connect(mapStateToProps, {NotificacoesList})(Notificacoes);
export default NotificacoesListConnect;