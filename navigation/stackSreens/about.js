import React from 'react';
import { 
    Text, 
    View } from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

export default function App() {
return(
    <View style={styles.container}>
        <View style={styles.headerBg}>
            <Text style={styles.pageTitle}>Review pages detail</Text>
        </View>
        <View style={styles.body}>
            <Text style={styles.bodyTitle}>Home page: </Text>
            <Text style={styles.bodyText}>A Home is providing a default style from the HTML example</Text>
            <Text style={styles.bodyTitle}>About page: </Text>
            <Text style={styles.bodyText}>This About page is a description of the other five pages</Text>
            <Text style={styles.bodyTitle}>Products page: </Text>
            <Text style={styles.bodyText}>A Productspage has a reused web-page from video project by using modal</Text>
            <Text style={styles.bodyTitle}>Portfolio page: </Text>
            <Text style={styles.bodyText}>A Portfolio page is providing art work</Text>
            <Text style={styles.bodyTitle}>Contact page: </Text>
            <Text style={styles.bodyText}>A Contact page is using ImageBackgrounds</Text>
        </View>
        
    </View>
);

}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10
        
      },
      headerBg:{
        alignItems: 'center'
      },
      pageTitle:{
        fontSize: 35,
        marginTop: 10,
        fontFamily: 'Georgia',
        fontWeight: 'bold',
        color:'#00334d',
        alignItems: "center",
      }, 
      body: {
        padding: 25
      }, 
      bodyTitle:{
        fontSize: 23,
        fontWeight: 'bold',
        color:'#669999',
        marginTop: 10,

      },
      bodyText:{
        fontSize: 20,
        color:'#00334d',
        marginBottom: 15, 
      }
});