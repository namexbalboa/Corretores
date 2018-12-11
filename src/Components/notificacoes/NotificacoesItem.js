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
        <View style={stylesItem.modalContent}>  
            <TouchableHighlight underlayColor="#DDDDDD" onPress={this._toggleModal}>
                <View style={stylesItem.modalFechar}>
                    <Text style={stylesItem.txtbtnFechar}>X</Text>
                </View>
            </TouchableHighlight>

                <Text>Hello</Text>

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
        height: 60,
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

    modalContent: {
        flex:1,
        backgroundColor: "white",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
      },
      modalFechar:{
        backgroundColor: 'black', 
        alignItems: 'center',
        paddingLeft: 20, 
        paddingRight: 20,
        borderRadius: 15,
      },
      txtbtnFechar:{
          color:'white',
          fontSize: 19,
          fontWeight: 'bold'
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
