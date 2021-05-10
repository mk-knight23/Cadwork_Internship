import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { StyleSheet, Text, View, Linking } from 'react-native';


export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>WELCOME TO CADWORKS</Header>
      <Paragraph>
      Cadworks is India's one of the leading engineering based service provider, specialized in CAD and GIS.

      </Paragraph>
      <Paragraph>
      Visit Our Official Website 
      
      </Paragraph>
      <Text style={styles.TextStyle} onPress={ ()=> Linking.openURL('https://cadworksindia.com') } >Click Here To Open CADWORKS .</Text>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
      </Button>
       
    </Background>
  )
}

const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
 
  TextStyle: {
 
    color: '#E91E63',
    textDecorationLine: 'underline'
 
  }
});
