import React, { Component } from 'react';
import {StyleSheet, Animated, ScrollView, TouchableHighlight, View, Text, Image, TouchableOpacity} from 'react-native';
//import Modal from "react-native-modal";

export default class NotificacoesItem extends Component{
    
    constructor(props){
        super(props);
        this.state = { 
            isModalVisible: false,
        }
    }

    /*
    static navigationOptions = {
        title: '',
        tabBarLabel:'Busca',
        header:null
    }
    */

    /*MODAL
    _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });
    //MODAL
    renderModalContent = () => (
        <ScrollView>
        <View style={stylesItem.modalContent}>  
            
                <View style={stylesItem.modalHeader}>   
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{this.props.data.name}</Text>
                    <TouchableHighlight style={stylesItem.modalFechar} onPress={this._toggleModal}>
                        <Text style={{fontSize:20, color: 'white'}}>X</Text>
                    </TouchableHighlight>
                </View>


                <View style={stylesItem.modalTop}>      
            
                    <Image source={require('../../../assets/img/bg4.jpg')} style={stylesItem.img}/>



                    <View style={stylesItem.modalBtns}>
                        <TouchableHighlight underlayColor={'green'} style={{backgroundColor: 'lightgreen', padding:12, width: '50%', justifyContent: 'space-around', alignItems: 'center'}} onPress={this.props.Button}>
                            <Text style={{fontSize:20, color: 'white'}}>Visitar</Text>
                        </TouchableHighlight>
                        <TouchableHighlight underlayColor={'pink'} style={{backgroundColor: 'purple', padding:12, width: '50%', justifyContent: 'space-around',  alignItems: 'center'}} onPress={this.Button}>
                            <Text style={{fontSize:20, color: 'white'}}>Negociar</Text>
                        </TouchableHighlight>
                    </View> 

                    <View style={{paddingTop: 15}}>
                        <Text style={{fontSize:15, fontWeight:'bold', color: 'gray'}}>Lorem Ipsum is simply</Text>
                        <Text style={{color:'gray', textAlign: 'justify'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book.
                        </Text>
                    </View>

                    <View style={stylesItem.modalCard}> 

                        <View style={{flexDirection:'column', alignItems:'center'}}>
                            <Image source={require('../../../assets/img/icons/home.png')} style={stylesItem.icon}/>
                            <Text style={[stylesItem.txtBtn, {paddingTop:3}]}>Valor:</Text>
                        </View>

                        <Text style={[stylesItem.txtBtn,{marginLeft: 25}]}>R$ 1.000.000,00</Text>

                    </View>

                    <View style={stylesItem.modalCard}>  

                        <View style={{flexDirection:'column', alignItems:'center'}}>
                            <Image source={require('../../../assets/img/icons/home.png')} style={stylesItem.icon}/>
                            <Text style={[stylesItem.txtBtn, {paddingTop:3}]}>Quartos:</Text>
                        </View>

                        <Text style={[stylesItem.txtBtn,{marginLeft: 25}]}>{this.props.data.quartos} (1 Suíte)</Text>

                    </View>

                    <View style={stylesItem.modalCard}> 

                        <View style={{flexDirection:'column', alignItems:'center'}}>
                            <Image source={require('../../../assets/img/icons/home.png')} style={stylesItem.icon}/>
                            <Text style={[stylesItem.txtBtn, {paddingTop:3}]}>Metros:</Text>
                        </View>

                        <Text style={[stylesItem.txtBtn,{marginLeft: 25}]}>{this.props.data.metros}m²</Text>

                    </View>

                    <View style={stylesItem.modalCard}> 

                        <View style={{flexDirection:'column', alignItems:'center'}}>
                            <Image source={require('../../../assets/img/icons/home.png')} style={stylesItem.icon}/>
                            <Text style={[stylesItem.txtBtn, {paddingTop:3}]}>Vagas:</Text>
                        </View>

                        <Text style={[stylesItem.txtBtn,{marginLeft: 25}]}>{this.props.data.vagas} carros</Text>

                    </View>

                    <View style={stylesItem.modalCard}> 

                        <View style={{flexDirection:'column', alignItems:'center'}}>
                            <Image source={require('../../../assets/img/icons/home.png')} style={stylesItem.icon}/>
                            <Text style={[stylesItem.txtBtn, {paddingTop:3}]}>Valor:</Text>
                        </View>

                        <Text style={[stylesItem.txtBtn,{marginLeft: 25}]}>R$ 1.000.000,00</Text>

                    </View>

                </View>

                <View style={stylesItem.modalBottom}>  
                    <TouchableOpacity onPress={this._toggleModal} style={stylesItem.btnFechar}>
                    <Text style={stylesItem.txtbtnFechar}>Fechar</Text>
                    </TouchableOpacity>
                </View>
        </View>
        </ScrollView>
    );



    //DENTRO DO VIEW
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

        */

    houseModalClick(){
    }

    render() {
        return (
                <View style={stylesItem.viewItem}>

                    <View style={stylesItem.viewTop}>
                        <TouchableHighlight underlayColor="#DDDDDD" onPress={this._toggleModal}>
                            <Text style={stylesItem.txtBtn}>Teste1</Text>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor="red" onPress={this.houseModalClick}>
                            <Image source={require('../../../assets/img/icons/favorito.png')} style={stylesItem.icon}/>
                        </TouchableHighlight>
                        
                    </View>

                    <View style={stylesItem.viewBottom}>
                        <TouchableHighlight underlayColor="#DDDDDD" style={stylesItem.buttonArea} onPress={this._toggleModal}>
                            
                            <View style={stylesItem.AreaItens}>

                                <View style={stylesItem.LinhaIcons}>

                                    <View style={[stylesItem.IconLabel, {paddingTop: 10}]}>
                                        <Image source={require('../../../assets/img/icons/home.png')} style={stylesItem.icon}/>
                                        <Text style={stylesItem.label}>Quartos:Teste1</Text>
                                    </View>

                                    <View style={[stylesItem.IconLabel, {paddingBottom: 10}]}>
                                        <Image source={require('../../../assets/img/icons/home.png')} style={stylesItem.icon}/>
                                        <Text style={stylesItem.label}>Metros: Teste1</Text>
                                    </View>

                                </View>

                                <View style={stylesItem.LinhaIcons}>

                                    <View style={[stylesItem.IconLabel, {paddingTop: 10}]}>
                                        <Image source={require('../../../assets/img/icons/home.png')} style={stylesItem.icon}/>
                                        <Text style={stylesItem.label}>Vagas:Teste1</Text>
                                    </View>

                                    <View style={[stylesItem.IconLabel, {paddingBottom: 10}]}>
                                        <Image source={require('../../../assets/img/icons/home.png')} style={stylesItem.icon}/>
                                        <Text style={stylesItem.label}>Vagas Teste1</Text>
                                    </View>

                                </View>

                            </View>

                        </TouchableHighlight>
                    </View>
                
                </View> 
        );
    }
}

const stylesItem = StyleSheet.create ({
    viewItem:{
        backgroundColor:'white',
        marginTop:4,
        marginBottom:4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    viewTop:{
        padding: 10,
        justifyContent:'space-between',
        flexDirection: 'row'
    },
    header:{
       
    },
    viewImg:{
        width:'100%',
        height:200,
    },
    txtBtn:{
        fontWeight: 'bold',
        fontSize: 17,
    },
    img:{
        width:'100%',
        height:200,
    },
    AreaItens:{
        flexDirection:'row', 
    },
    LinhaIcons:{
        width:'50%',
    },
    IconLabel:{
        width:'100%',
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft:25,
        paddingTop:8,
        paddingBottom:8,
    },
    label:{
        paddingLeft:8,
        fontSize: 14,
        fontWeight: 'bold'
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
});
