import React, { Component } from 'react';
import {StyleSheet, Animated, ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import Modal from "react-native-modal";
import firebase from '../../FBCONN';
import { withNavigation } from "react-navigation";

export class NotificacoesItem extends Component{
    
    constructor(props){
        super(props);
        this.state = { 
            isModalVisible: false,
            bgColor: '',
            ativo: '',
            endereco:'',
        }
    }

    static navigationOptions = {
        title: '',
        tabBarLabel:'Notificacoes',
        header:null
    }


    componentDidMount(){
        firebase.database().ref('anuncios/uidAnuncio2/info/endereco')
        .once("value").then(snapshot => {
            this.setState({ endereco: snapshot.val().geral }); 
            });

		if(this.props.data.val.status == false) {
            this.setState ({bgColor: 'lightgreen', ativo: 'Disponível'});

		}else if(this.props.data.val.status == true){ 
            this.setState ({bgColor: 'rgba(0,0,0,0.2)', ativo: 'Inativo'});
        }
    }

    _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

    renderModalContent = () => (
        <View style={stylesItem.modalContent}>  
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={{fontSize: 28, fontWeight: 'bold', paddingRight:100}}>Detalhes</Text>
                
                <TouchableOpacity underlayColor="#DDDDDD" onPress={this._toggleModal}>
                    <View style={stylesItem.modalFechar}>
                        <Text style={stylesItem.txtbtnFechar}>X</Text> 
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{paddingTop: 30}}>
                <View style={stylesItem.linha}>
                    <Text style={stylesItem.h1}>Visita - {this.state.ativo}</Text>
                </View>
                <View style={stylesItem.linha}>
                    <Text style={stylesItem.txtBtn}>Tipo: {this.props.data.val.tipo}</Text>
                </View>
                <View style={stylesItem.linha}>      
                    <Text style={stylesItem.txtBtn}>Dia: {this.props.data.val.date} ({this.props.data.val.dia} às {this.props.data.val.hora})</Text>
                </View>
                <View style={stylesItem.linha}>
                    <Text style={stylesItem.txtBtn}>Endereço: {this.state.endereco}</Text>
                </View>
            </View>

            <View style={{paddingTop: 30}}>
                <TouchableOpacity style={[stylesItem.btn, {backgroundColor: '#5CB85C'}]} underlayColor="#dfe3ee" onPress={()=>{
                    alert('Visita Agendada');
                    firebase.database().ref('visitas/'+this.props.data.val.key).update({status: true});
                    this.setState({ isModalVisible: !this.state.isModalVisible });
                    this.props.navigation.goBack();
                }}>
                    <Text style={[stylesItem.txtbtnFechar, {padding: 20}]}>Aceitar Visita</Text>
                </TouchableOpacity>
            </View>
        </View>

    );


    houseModalClick(){
    }

    render() {
        return (
                <View style={stylesItem.container}>

                        <Modal 
                        isVisible={this.state.isModalVisible}
                        backdropOpacity={0.7}
                        animationInTiming={800}
                        animationOutTiming={800}
                        backdropTransitionInTiming={500}
                        backdropTransitionOutTiming={500}
                        >
                            <View style={{ flex: 1 }}>

                                {this.renderModalContent()}
                                
                            </View>
                        </Modal>

                        <TouchableOpacity underlayColor="#DDDDDD" style={[stylesItem.area, {backgroundColor: this.state.bgColor}]} disabled={this.props.data.val.status} onPress={this._toggleModal}>
                        <View>
                            <View style={stylesItem.linha}>
                                <Text style={stylesItem.h1}>Visita - {this.state.ativo}</Text>
                            </View>
                            <View style={stylesItem.linha}>
                                <Text style={stylesItem.txtBtn}>Tipo: {this.props.data.val.tipo}</Text>
                            </View>
                            <View style={stylesItem.linha}>      
                                <Text style={stylesItem.txtBtn}>Dia: {this.props.data.val.date} ({this.props.data.val.dia} às {this.props.data.val.hora})</Text>
                            </View>
                        </View>
                        </TouchableOpacity>

                </View>
        );
    }
}

const stylesItem = StyleSheet.create ({
    container:{
        backgroundColor:'white',
        marginTop:4,
        marginBottom:4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    area:{
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 3,
    },
    linha:{
        padding: 3,
        justifyContent:'space-between',
        flexDirection: 'row'
    },
    h1:{
        fontSize:18,
        fontWeight: 'bold'
    },
    txtBtn:{
        fontSize: 14,
        color: 'gray'
    },
    modalContent: {
        backgroundColor: "white",
        padding: 22,
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)",
      },
      modalFechar:{
        backgroundColor: 'black', 
        height: 20,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
      },
      txtbtnFechar:{
          color:'white',
          fontSize: 19,
          fontWeight: 'bold'
      },
      btn:{
        height: 40,  
        backgroundColor:'#5CB85C',
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
      /*
      barContainer: {
        alignSelf: 'center',
        position: 'absolute',
        zIndex: 2,
        top: 8,
        flexDirection: 'row',
      },
      track: {
        backgroundColor: '#ccc',
        overflow: 'hidden',
        height: 2,
      },
      bar: {
        backgroundColor: '#5294d6',
        height: 2,
        position: 'absolute',
        left: 0,
        top: 0,
      },
      */
});

export default withNavigation(NotificacoesItem);