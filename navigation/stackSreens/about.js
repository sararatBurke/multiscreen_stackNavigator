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
        <Text>Home</Text>
    </View>
);

}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d0e1e1",
        
      },
      headerBg:{
        backgroundColor: '#fff'
      },
      pageTitle:{
        fontSize: 35,
        marginTop: 10,
        fontFamily: 'Georgia',
        fontWeight: 'bold',
        color:'#00334d',
        alignItems: "center",
      }
});