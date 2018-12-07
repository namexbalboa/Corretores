import React, {Component} from 'react';
import {Image} from 'react-native';
//import { connect } from 'react-redux';
import { createBottomTabNavigator } from 'react-navigation';

import Notificacoes from './Notificacoes';
import Agenda from './Agenda';
import Precificacao from './Precificacao';
import Perfil from './Perfil';

const GeralNavigator = createBottomTabNavigator({
    Notificacoes:{
        screen:Notificacoes,
        navigationOptions: () => ({
            tabBarIcon: () => (
                <Image source={require('../../../assets/img/icons/home.png')} />
            )
        })
    },
    Agenda:{
        screen:Agenda,
        navigationOptions: () => ({
            tabBarIcon: () => (
                <Image source={require('../../../assets/img/icons/chat.png')} />
            )
        })
    },
    Precificacao:{
        screen:Precificacao,
        navigationOptions: () => ({
            tabBarIcon: () => (
                <Image source={require('../../../assets/img/icons/favorito.png')} />
            )
        })
    },
    Perfil:{
        screen:Perfil,
        navigationOptions: () => ({
            tabBarIcon: () => (
                <Image source={require('../../../assets/img/icons/conta.png')} />
            )
        })
    },
},{
    tabBarPosition:'bottom',
    animationEnabled:false,
    swipeEnabled:false,
}
    
);

export default GeralNavigator;