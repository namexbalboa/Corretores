import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../src/actions/AuthActions';
import { NavigationActions, StackActions } from 'react-navigation';

export class Preload extends Component{
    
    static navigationOptions = {
        title: '',
        header:null
    }

    constructor(props){
        super(props);
        this.state = {};

        this.props.checkLogin();
        this.directPages = this.directPages.bind(this);
    }


    directPages(){
       
        if(this.props.status == 0 || this.props.status == 2){
            this.props.navigation.dispatch(StackActions.reset({
                index:0,
                actions:[
                    NavigationActions.navigate({routeName:'Login'})
                ]
            }));  
    
        }

        if(this.props.status == 1){
            
            this.props.navigation.dispatch(StackActions.reset({
                index:0,
                actions:[
                    NavigationActions.navigate({routeName:'Home'})
                ]
            }));
        }
    }
   
   
    componentDidMount(){
        this.directPages();
    }

    componentDidUpdate(){
        this.directPages();
    }
    

    render() {
        return (
            
            <View style={styles.container}>
                <Text style={styles.title}>App Corretor</Text>
            </View> 

        )
    }
}

const styles = StyleSheet.create({
      container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#CBE86B'
      },
      title:{
        fontSize: 40,
        backgroundColor: 'transparent',
        fontWeight: 'bold',
        color: 'white'
      },
})

const mapStateToProps = (state) => {
    return{
        status:state.auth.status
    };

};

const PreloadConnect = connect(mapStateToProps, { checkLogin })(Preload);
export default PreloadConnect;