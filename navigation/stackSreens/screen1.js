import React from 'react';
import { Text, View, 
ScrollView } from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import { NavigationContainer } from "@react-navigation/native";


export default function App() {

  const banner = { uri:"https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image1.jpg"}
  
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  
  return (
    <View style={styles.container}>
      <View style={styles.page}>
        <View style={styles.nav}>
            <Text>LandscapeTitles</Text>
        
        {/* Nav bar */}
        <ScrollView 
            horizontal={true}
            showHorizontalScrollIndicator={false}>
                
                <Text style={styles.navText}>Home</Text>
                <Text style={styles.navText}>About</Text>
                <Text style={styles.navText}>Portfolio</Text>
                <Text style={styles.navText}>Services</Text>
                <Text style={styles.navText}>Contact</Text>
        </ScrollView>
 
      </View>

      <View style={styles.bannerBorder}>
        {/* Banner image */}

        {/* <ImageBackground source={banner}
          style={styles.bannerBg}>
        <Text style={styles.bannerHead}>An Ocean of Sky</Text>
        <Text style={styles.bannerSubHead}>An XHTML 1.0 Strict Template by Bryant Smith</Text> */}
        
      </View>

      <View style={styles.bodyBorder}>
        {/* Body */}
       
        <ScrollView style={styles.content}>
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

        </ScrollView>
     
        </View>
      </View>
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fe3432',
    alignItems: 'center',
    // justifyContent: 'center', 
  },
  page:{
    flex: 1,
    borderColor:'#000',
    borderWidth: 3
  },

  bg:{
    width: '100%',

    flex: 1,
    resizeMode: 'stretch',
   
    
  },
  navBg:{
    padding: 20,
    height: 200,
    borderBottomWidth: '4@s',
    borderBottomColor: '#fff'
  
  },
  nav: {
    flex: 0.1,
     
  },
  navText: {
    fontFamily: 'Georgia',
    fontSize: '20@mvs0.3',
    marginHorizontal: '25@mvs',
    color: '#CDE2FC',
    paddingTop: 40
  },
  bannerBorder:{
    width: '80%',
    borderWidth: '4@s',
    borderColor: '#fff',
    alignSelf: 'center',
    marginTop: '-15@s'
  },
  video: {
    alignSelf: 'center',
    width: '100%',
    
  },
//   buttons: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   bannerBg: {
//     width: '100%',
//     height: '250@s',
//     resizeMode: "stretch",
//     padding: 20,
//   },
  bannerHead:{
    fontFamily: 'Georgia',
    fontSize: '25@mvs',
    color: '#fff'
  },
  bannerSubHead:{
    fontFamily: 'Georgia',
    fontSize: '13@mvs',
    color: '#A9C8FA'
  },

  bodyBg: {
    padding: 20, 
    height: '100%'
  },
  
  bodyBorder:{
    flex: 1,
    width: '80%',
    alignSelf: 'center',
    borderWidth: '4@s',
    marginTop: '15@mvs',
    marginBottom: 10,
    borderColor: '#fff'
    
  },

  content:{
    width: '100%',
    padding: 15,
    marginBottom: 10
  },
  head:{
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    fontSize: '20@mvs0.5',
    color: '#1F1603',
    marginBottom: 10
  },
  bodyText: {
    fontFamily: 'Georgia',
    fontSize: '14@mvs0.5',
    marginTop: 5, 
    marginBottom: 20, 
    lineHeight: '25@mvs0.2',
  },
  
});