import React from 'react';
import { 
    Text, 
    View, 
    Image } from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

export default function App() {
return(
    <View style={styles.container}>
        <View style={styles.headerBg}>
            <Text style={styles.pageTitle}>Works</Text>
        </View>
        <View style={styles.body}>
            <Image 
                source={require('../images/portfolio1.jpg')} 
                style={styles.image}/>
            <Image 
            source={require('../images/todo-burger.png')} 
            style={styles.image}/>
            <Image 
            source={require('../images/todo-react.png')} 
            style={styles.image}/>
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
        marginTop: 15,
        marginLeft: '10%', 
        margin:'auto',
      }, 
      image:{
        width: '320@mvs0.1', 
        height: '200@mvs0.1',
        borderWidth: 1,
        borderColor: '#000',
        marginTop: 10
      }
});