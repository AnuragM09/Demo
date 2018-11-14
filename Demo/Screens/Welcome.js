import React, { Component } from 'react';

import { AppState, StyleSheet, Text, View, Alert, Button,Image,TouchableOpacity } from 'react-native';

import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

import styles from './styles.js';


export default class Welcome extends Component {
    state = {
        userInfo: {},
     }
 
     componentWillMount() {
      this.handleGreeting();
    }
     
   
handleGreeting(){
  const today = new Date();
    const curHr = today.getHours();
    let greeting = '';

    if (curHr < 12) {
      greeting = 'Morning';
    }
    else if (curHr < 18) {
      greeting = 'Afternoon';
    }
    else {
      greeting = 'Evening';
    }
    return greeting;
  }
  sendNotification() {
    notification.postNotificationToken();
        notification.getTime();
      console.log("pressed")
    }
    

    render(){
      
       const user = this.props.navigation.state.params.userInfo.user

      return (
  
        <View style={styles.container}>
        <Image
          style={[
            styles.background,
            {
              width: '100%',
              height: '100%'
            }
          ]}
          source={backgroundImage}
        />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20,color:"white" }}>
      Welcome {user.givenName}
    </Text>
    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20,color:"white" }}>Good {this.handleGreeting()}, {user.givenName}</Text>
    <Image
          style={{width: 150, height: 158}}
          source={{uri : user.photo}}
        />
        <Button onPress={this._signOut} title="Log out" />
        <Button onPress={this.sendNotification} title="Send Notification" />
           
        
  </View>
);

  }
   
  _signOut = async () => {
    try {

      await GoogleSignin.signOut();
      this.props.navigation.navigate('Logout');
      this.setState({ userInfo: null, error: null });
    } catch (error) {
      this.setState({
        error,
      });
    }
  };
}

