import React, { useState, useEffect } from "react";
import {
    ImageBackground,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Linking,
    Modal, 
    Pressable,
    Dimensions
  } from "react-native";
  import { ScaledSheet } from "react-native-size-matters";
  import { WebView } from "react-native-webview";
  import Icon from "react-native-vector-icons/MaterialCommunityIcons";
  import {LinearGradient} from 'expo-linear-gradient';

 const window = Dimensions.get("window");
 const screen = Dimensions.get("screen");
 
 
 const App = () => {
   const [dimensions, setDimensions] = useState({ window, screen });
   const [mode, setMode] = useState("portrait");
   const [modalVisible, setModalVisible] = useState(false);
   const [playing, setPlaying] = useState(false);

   const image = { uri: "https://www.html.am/templates/downloads/bryantsmith/anoceanofsky/anoceanofsky.jpg" };
   const header = {uri:"https://www.html.am/templates/downloads/bryantsmith/nightbeach/images/menu.png"};


   const modeMaker = () => {
    if (dimensions.screen.width > dimensions.screen.height) {
      setMode("landscape") 
      
    } else {
      setMode("portrait") 
     
    }
    console.log(mode, playing)
    setPlaying(false)
   };

 const onChange = ({ window, screen }) => {
     setDimensions({ window, screen });
   };

 useEffect(() => {
     Dimensions.addEventListener("change", onChange);

     return () => {
       Dimensions.removeEventListener("change", onChange),
      modeMaker();
     };

   });
  
 return (
    
    <SafeAreaView style={styles.container}>
    <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        supportedOrientations={['landscape']} 
        onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
    }}>
        <View style={styles.centeredView}>
            <View style={styles.video}>
            <WebView source={{html: '<iframe width="100%" height="100%" src="http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'}}/>
            </View>

            <Pressable style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>CLOSE</Text>
            </Pressable>
        
        </View>
    </Modal>


    {mode === "portrait" ? <View style={styles.imagecontainer}>
    <ImageBackground source={image} style={styles.image}>
      <Icon name="play" color="white" size={120} onPress={() => setModalVisible(true)} />
    </ImageBackground>
  
    </View> : null}
    <View style={mode === "portrait" ? styles.nav : styles.nav2}>
      <LinearGradient colors={['#223DA2', '#4776C6']} style={mode === "portrait"? styles.navBg : styles.navBg2}>
      
        <View style={styles.linkcenter}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
              <View style={styles.linkcenter2}>
            <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => Linking.openURL('maps://app?saddr=Cupertino&San+Francisco')}>Home</Text>
            </View>
            <View style={styles.linkcenter2}>
            <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => setModalVisible(true)}>VideoInModal</Text>
            </View>
            <View style={styles.linkcenter2}>
            <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => Linking.openURL('maps://app?saddr=Cupertino&San+Francisco')}>Products</Text>
            </View>
            <View style={styles.linkcenter2}>
            <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => Linking.openURL('maps://app?saddr=Cupertino&San+Francisco')}>Services</Text>
            </View>
            <View style={styles.linkcenter2}>
            <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => Linking.openURL('maps://app?saddr=Cupertino&San+Francisco')}>Design</Text>
            </View>
            <View style={styles.linkcenter2}>
            <Text style={mode === "portrait" ? styles.links : styles.links2} onPress={() => Linking.openURL('maps://app?saddr=Cupertino&San+Francisco')}>Contact</Text>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    </View>

    <View style={styles.bodyBorder}>
      <ScrollView style={styles.content}> 
        <LinearGradient colors={['#E3EDFC', '#fff']} style={styles.bodyBg}>
        <Text style={styles.head}>The Title of an Article</Text>
                <Text style={styles.bodyText}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy</Text>
                <Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>
                <Text style={styles.bodyText}>Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.</Text>
            <Text style={styles.head}>So Many Titles, So Little Time.</Text>
                <Text style={styles.bodyText}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy</Text>
                <Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>
                <Text style={styles.bodyText}>Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.</Text>
            <Text style={styles.head}>Yet Another One!</Text>
                <Text style={styles.bodyText}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy</Text>
                <Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>
                <Text style={styles.bodyText}>Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.</Text>
        </LinearGradient>
      </ScrollView>
    </View>

  </SafeAreaView>
   );
 }
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e4297",
    alignItems: "center",
    flexDirection: "column",
  },

  imagecontainer: {
    justifyContent: "flex-start",
    width: "90%",
    height: '180@s',
    backgroundColor: "green",
    marginTop: 0,
  },

  navBg:{
    padding: '15@s',
    paddingLeft:'25@s',
    height: 100,
    borderBottomWidth: '4@s',
    borderBottomColor: '#fff'
  
  },
  navBg2:{
    height: 100,
    borderBottomWidth: '4@s',
    borderBottomColor: '#fff',
  
  },
  nav: {
    flex: 0.1,
    width: "100%",
      
  },
  nav2: {
    alignItems: "center",
    flex: 0.2,
    width: "90%",
  },
  image: {
    width: "100%",
    height: '100%',
    resizeMode: "stretch",
    justifyContent: "center",
    alignItems: "center",
    borderColor: '#fff',
    borderWidth: '4@s'
              
  },
  
  bodyBorder:{
    width: '90%',
    alignSelf: 'center',
    marginTop: '50@mvs',
    marginBottom: '10@s', 
  },
  bodyBg: {
    padding: 20, 
    height: '100%',
    borderWidth: '4@s',
    borderColor: '#fff',
  },
  content:{
    width: '100%',
    marginBottom: 10,
    // padding: 15,
  },
  links: {
    color: "white",
    fontWeight: "bold",
    marginHorizontal: "16@s",
    fontFamily: 'Georgia',
    fontSize: '13@mvs0.3',
  },
  links2: {
    color: "white",
    fontWeight: "bold",
    marginRight: "25@s",
    marginLeft: "15@s",
    fontSize: "14@s",
    fontFamily: 'Georgia',
  },

  head: {
    color: "black",
    fontWeight: "700",
    fontSize: "18@s",
    fontFamily: 'Georgia',
    marginTop: "5@s",
    marginBottom: "10@s",
  },
  
  bodyText: {
    color: "black",
    fontSize: "15@s",
    fontFamily: 'Georgia',
  },

  linkcenter2: {
    height: "100%",
    justifyContent: "center",
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    marginBottom:20,
    alignItems: 'center'
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  
  centeredView: {
    flexDirection: "column",
    flex: 1,
    width: "100%",
    backgroundColor: "black",
    marginTop: -8,
    alignItems: "center",
    height: "200%",
  },

  video: {
    flex:1,
    width: "105%",
    backgroundColor: "black",

  },

 });
 export default App;