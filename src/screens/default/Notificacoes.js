import React, {Component} from 'react';
import {StyleSheet, FlatList, View, Text, ActivityIndicator, Switch, Button} from 'react-native';
import { connect } from 'react-redux';
import NotificacoesItem from '../../Components/notificacoes/NotificacoesItem';
import { NotificacoesList } from '../../actions/NotificacoesActions';
import firebase from '../../FBCONN';

DB = firebase.database(); 
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
        switchValue: false,
        bgColor:'#FF5858',
        txtAtivar: '.',
        txtOnline: 'DESCONECTADO',
        nome: '',
        status: 2,
        creci: '',
        data: []
    };
  
    this.alternar = this.alternar.bind(this);
    this.alternar();
    this.props.NotificacoesList();
    this.houseClick = this.houseClick.bind(this);

    }

    componentDidMount(){
        
        DB.ref('visitas')
        .on("value", snapshot => {
            const data = [];
            
            snapshot.forEach((childSnap)=>{
                data.push({
                    key: childSnap.key,
                    val: childSnap.val()
                });
            });
            
            this.setState({ data });
         
        }); 
        
        

        //Busca corretor logado
        DB.ref('corretores').on('value', (snapshot)=>{

        let exemplo = [];

        snapshot.forEach((childSnapshot)=>{
            exemplo.push({
                key:childSnapshot.key,
                name:childSnapshot.val().nome,
                creci:childSnapshot.val().creci,
                status:childSnapshot.val().statusNow,
            });
        });
        
        let found = exemplo.find(function(element) {
            return element.key == 'uidCorretor';
          });
        
        if (found.name != null){
            this.setState({ 
                nome: found.name, 
                status: found.status,
                creci: found.creci,
            })  
        } 

        });
        
    }

    componentWillUnmount(){
        //DB.ref('corretores').off(); 
        //DB.ref('anuncios').off(); 
    }

    componentWillReceiveProps() {
        setTimeout(() =>{
            this.setState({ loading: false })
        },
            500)
        
    }

    houseClick(){
        
    }
    
    alternar() {
        let s = this.state;

		if(this.state.status == 2) {
            s.bgColor = 'lightgreen';
            s.switchValue = true;
            s.txtAtivar = 'Desativar';
            s.txtOnline = 'ONLINE';
            s.status = 1;
            firebase.database().ref('corretores/' + 'uidCorretor')
                .update({statusNow: 1});

		}else if(this.state.status == 1) {
            s.bgColor = '#FF5858';
            s.switchValue = false; 
            s.txtAtivar = 'Ativar';
            s.txtOnline = 'OFFLINE';
            s.status = 2;
            firebase.database().ref('corretores/' + 'uidCorretor')
                .update({statusNow: 2});
          
		}

        this.setState(s);
   
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
                        <Text style={styles.whiteText}>{this.state.nome}</Text>
                        <Text style={styles.whiteText}>Creci: {this.state.creci}</Text>
                    </View>

                    <View style={styles.topBarRight}>
                        <Text>Imagem</Text>
                    </View>

                </View>

            
            <View style={[styles.statusBar, {backgroundColor:this.state.bgColor}]}>
                
                <View style={styles.statusBarLeft}>
                    <Text>{this.state.txtOnline}</Text>
                </View>
                
                <View style={styles.statusBarRight}>
                    <Text>{this.state.txtAtivar}</Text>

                    <Switch value={this.state.switchValue} onValueChange={this.alternar} />

                </View>

                
            </View>
            
            <View style={styles.adjust}>
                <FlatList 
                    data={this.state.data}
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