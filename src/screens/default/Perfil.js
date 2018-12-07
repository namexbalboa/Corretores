import React, {Component} from 'react';
import { Animated, View, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'
import { connect } from 'react-redux';

export class Perfil extends Component {

  static navigationOptions = {
    title: '',
    tabBarLabel:'Perfil',
    header:null
  }

  constructor(props){
    super(props);
    this.state = { 

    };
  }

  render() {

    return (
      <View style={styles.container}>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const mapStateToProps = (state) => {
    return{
        status:state.auth.status,
        uid:state.auth.uid
    };

};

const PerfilListConnect = connect(mapStateToProps)(Perfil);
export default PerfilListConnect;