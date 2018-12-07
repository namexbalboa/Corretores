import React, {Component} from 'react';
import {StyleSheet, FlatList, View, Text, ActivityIndicator} from 'react-native';
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
        loading: true, 
    };
  
    this.props.NotificacoesList();
    this.houseClick = this.houseClick.bind(this);
    }

  componentWillReceiveProps() {
    setTimeout(() =>{
        this.setState({ loading: false })
    },
        2000)
    }

    houseClick(){
        
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
            <FlatList 
                data={this.props.lista}
                windowSize={20}
                renderItem={ ({item}) => <NotificacoesItem data={item} onPress={(this.houseClick)}/> } 
            />

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