import React from 'react';
import { 
    ImageBackground,
    Text, 
    View,
    SafeAreaView,
    TextInput,
    Button
     } from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

export default function App() {
    const bg = { uri:"https://www.summitroofing.com/images/bg/bg-12.jpg"};
    const [text, onChangeText] = React.useState(null);
    const [email, onChangeEmail] = React.useState(null);
    const [msg, onChangeMSG] = React.useState(null);
return(
    <View style={styles.container}> 
        <ImageBackground
            source={bg}
            style={styles.containerBg}>
            
            <View style={styles.body}>
                <Text style={styles.name}>SARARAT BURKE</Text>
                <Text style={styles.contactText}>111 Bhcc Street, Boston, MA 01201</Text>
                <Text style={styles.contactText}>sb253910@bhcc.edu</Text>
                <Text style={styles.contactText}>999-999-9999</Text>
            </View>

            <SafeAreaView style={styles.inputArea}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder=" NAME"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholder=" EMAIL"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeMSG}
                    value={msg}
                    placeholder=" EMAIL"
                    keyboardType="numeric"
                />
                <View style={styles.submit}>
                <Text style={styles.submitText} title="Submit">Submit</Text>
                </View>
            </SafeAreaView>
        </ImageBackground> 
    </View>
);

}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff", 
      },
      containerBg:{
        width: '100%',
        flex: 1,
        resizeMode: "stretch",
      },
      body:{
        padding: 20,
        marginLeft: '15%'
      },
      name:{
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10
          
      },
      contactText:{
        fontSize: 20,

      },
      inputArea:{
        width: '70%',
        marginLeft: '15%'
      },
      input: {
        height: 40,
        margin: 10,
        borderWidth: 1,
      },
      submit:{
        width: 130,
        marginLeft: '42%',
        
        
      },
      submitText:{
        backgroundColor: '#009999',
        textAlign: 'center',
        paddingVertical:10,
        borderRadius: 2,

      }
      
});