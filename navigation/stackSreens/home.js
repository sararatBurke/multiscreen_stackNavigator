import React from 'react';
import { 
    Text, 
    View, 
    ScrollView,
    Image } from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

export default function App() {

  const pic1 = { uri:"https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image1.jpg"}
  const pic2 = { uri:"https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image2.jpg"}
  const pic3 = { uri:"https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image3.jpg"}
  
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headTitle}>
            <Text style={styles.headerText1}>Landscape</Text>
            <Text style={styles.headerText2}>Titles</Text>
          </View>
        </View>

      <View style={styles.bodyBorder}>
        {/* Body */}
       
        <ScrollView style={styles.content}>
            <Image source={pic1} style={styles.pic}/>
            <Text style={styles.head}>Template Information</Text>
                <Text style={styles.bodyText}>You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class="picture" to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.</Text>
             
            <Image source={pic2} style={styles.pic}/>
            <Text style={styles.head}>Template Information</Text>
                <Text style={styles.bodyText}>You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class="picture" to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.</Text>
            
            <Image source={pic3} style={styles.pic}/>
            <Text style={styles.head}>Template Information</Text>
                <Text style={styles.bodyText}>You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class="picture" to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.</Text>
            

            <Image source={pic1} style={styles.pic}/>
            <Text style={styles.head}>Template Information</Text>
                <Text style={styles.bodyText}>You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class="picture" to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.</Text>
            
            <Image source={pic2} style={styles.pic}/>
            <Text style={styles.head}>Template Information</Text>
                <Text style={styles.bodyText}>You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class="picture" to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.</Text>

            <Image source={pic3} style={styles.pic}/>
            <Text style={styles.head}>Template Information</Text>
                <Text style={styles.bodyText}>You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class="picture" to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.</Text>
            
        </ScrollView>
     
        </View>
    
    </View>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center', 
  },
  header:{
    flexDirection: 'row',
    // backgroundColor: 'green',
    marginTop: 10,
    
  },
  headTitle:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    

  },
  headerText1:{
    fontSize: 35, 
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    color:'#2A64A6',
    // backgroundColor:'red'

  },
  headerText2:{
    fontSize: 35, 
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    color:'#0C2745',
  },

  pic: {
    width: '400@s',
    height: '120@s',
    resizeMode: "stretch",
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

  head:{
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    fontSize: '20@mvs0.5',
    color: '#1C3E83',
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