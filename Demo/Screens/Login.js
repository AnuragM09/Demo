import React, { Component } from 'react';

import { AppRegistry, StyleSheet, Text, View, Alert, Button,Image,TouchableOpacity,ImageBackground } from 'react-native';

import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

const btnImage = require('/Users/amudamula/Demo/Demo/Images/Icon');

const backgroundImage = require('/Users/amudamula/Demo/Demo/Images/loginbackground.jpg');


export default class Login extends Component {
  state = {
    userinfo: {}
  }
  
  async componentDidMount() {
    this._configureGoogleSignIn();
   
  }

  _configureGoogleSignIn() {
    GoogleSignin.configure({
      webClientId: '656446941062-9l6kt9k6csok2if812ciik3o7oomrsa7.apps.googleusercontent.com',
      scopes: ["https://www.googleapis.com/auth/drive.readonly"], 
      
    });
    console.log("hello111");
  }
  render() {
    return (
     
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey'
      }}>
        <Image style={[styles.backgroundImage,{width: '100%',height: '100%'}]}
          source={backgroundImage}
        />
        <View style={styles.bottom}>
        <TouchableOpacity styles = {styles.button} onPress={() => this._signIn()}>
        <Image style={styles.btn} source={btnImage} />
      </TouchableOpacity>
      </View>
     </View>
      
      
    )
  }
  renderError() {
    const { error } = this.state;
    if (!error) {
      return null;
    }
    const text = `${error.toString()} ${error.code ? error.code : ''}`;
    return <Text>{text}</Text>;
  }

  _signIn = async () => {
    
      
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo});
      console.log(userInfo.user);
      this.props.navigation.navigate('Home', {userInfo});
  };
}

