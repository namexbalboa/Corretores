import React, { Component } from 'react';
import {StyleSheet, Animated, ScrollView, TouchableHighlight, View, Text, Image, TouchableOpacity} from 'react-native';
import Modal from "react-native-modal";

export default class NotificacoesItem extends Component{
    
    constructor(props){
        super(props);
        this.state = { 
            isModalVisible: false,
        }
    }

 
    _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

    renderModalContent = () => (
        <ScrollView>
        <View style={stylesItem.modalContent}>  
                <Text>Hello</Text>
        </View>
        </ScrollView>
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

                        <TouchableHighlight underlayColor="#DDDDDD" onPress={this._toggleModal}>
                        <View>

                            <View style={stylesItem.linha}>
                            
                                <Text style={stylesItem.txtBtn}>{this.props.data.creci}</Text>
                                <Image source={require('../../../assets/img/icons/favorito.png')} style={stylesItem.icon}/>

                            </View>

                            <View style={stylesItem.linha}>
                            
                                <Text style={stylesItem.txtBtn}>{this.props.data.creci}</Text>
                                <Image source={require('../../../assets/img/icons/favorito.png')} style={stylesItem.icon}/>

                            </View>

                        </View>
                        </TouchableHighlight>

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
    linha:{
        padding: 3,
        justifyContent:'space-between',
        flexDirection: 'row'
    },
    txtBtn:{
        fontWeight: 'bold',
        fontSize: 17,
    },

    /*
    modalContent: {
        flex:1,
        backgroundColor: "white",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
      },
      modalHeader:{
          flexDirection: 'row',
          alignItems:'center',
          justifyContent: 'space-between',
          width: '100%',  
      },
      modalBtns:{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 15,
      },
      modalFechar:{
        backgroundColor: 'black', 
        alignItems: 'center',
        paddingLeft: 20, 
        paddingRight: 20,
        borderRadius: 15,
      },
      modalCard:{
        marginTop:15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding:15,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      modalTop:{
        justifyContent: 'flex-start',
        paddingTop: 15,
        width:'100%',
        height: '90%',
      },
      modalBottom:{
        justifyContent: 'flex-end',
        width:'100%',
        height: '10%',
      },
      btnFechar:{
          backgroundColor: 'black',
          width:'100%',
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf:'center'
      },
      txtbtnFechar:{
          color:'white',
          fontSize: 19,
          fontWeight: 'bold'
      },
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
