import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../stackSreens/home';
import About from '../stackSreens/about';
import Products from '../stackSreens/products';
import Contact from '../stackSreens/contact';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.buttons}>
            <Button color="#00334d"
                title="Home" onPress={() => navigation.navigate('Home')}/>
            <Button color="#00334d"
                title="About" onPress={() => navigation.navigate('About')}/>
            <Button color="#00334d"
                title="Products" onPress={() => navigation.navigate('Products')}/>
            <Button color="#00334d"
                title="Portfolio" onPress={() => navigation.navigate('Portfolio')}/>
            <Button color="#00334d"
            title="Contact"onPress={() => navigation.navigate('Contact')}/>
        </View>
        <Home />
    </View>
    
  );
}
function AboutScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
            <Button color="#00334d"
                title="Home" onPress={() => navigation.navigate('Home')}/>
            <Button color="#00334d"
                title="About" onPress={() => navigation.navigate('About')}/>
            <Button color="#00334d"
                title="Products" onPress={() => navigation.navigate('Products')}/>
            <Button color="#00334d"
                title="Portfolio" onPress={() => navigation.navigate('Portfolio')}/>
            <Button color="#00334d"
            title="Contact"onPress={() => navigation.navigate('Contact')}/>
            </View>
            <About />
        </View>
    );
  }

function ProductsScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.buttons}>
            <Button color="#00334d"
                title="Home" onPress={() => navigation.navigate('Home')}/>
            <Button color="#00334d"
                title="About" onPress={() => navigation.navigate('About')}/>
            <Button color="#00334d"
                title="Products" onPress={() => navigation.navigate('Products')}/>
            <Button color="#00334d"
                title="Portfolio" onPress={() => navigation.navigate('Portfolio')}/>
            <Button color="#00334d"
            title="Contact"onPress={() => navigation.navigate('Contact')}/>
        </View>
        <Products />
    </View>
  );
}

function PortfolioScreen({ navigation }) {
    return (
    <View style={styles.container}>
        <View style={styles.buttons}>
            <Button color="#00334d"
                title="Home" onPress={() => navigation.navigate('Home')}/>
            <Button color="#00334d"
                title="About" onPress={() => navigation.navigate('About')}/>
            <Button color="#00334d"
                title="Products" onPress={() => navigation.navigate('Products')}/>
            <Button color="#00334d"
                title="Portfolio" onPress={() => navigation.navigate('Portfolio')}/>
            <Button color="#00334d"
            title="Contact"onPress={() => navigation.navigate('Contact')}/>
        </View>
    </View>
    );
}

function ContactScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.buttons}>
            <Button color="#00334d"
                title="Home" onPress={() => navigation.navigate('Home')}/>
            <Button color="#00334d"
                title="About" onPress={() => navigation.navigate('About')}/>
            <Button color="#00334d"
                title="Products" onPress={() => navigation.navigate('Products')}/>
            <Button color="#00334d"
                title="Portfolio" onPress={() => navigation.navigate('Portfolio')}/>
            <Button color="#00334d"
            title="Contact"onPress={() => navigation.navigate('Contact')}/>
        </View>
        <Contact />
    </View>
  
  );
}

const Stack = createStackNavigator(
    
);

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} 
        options={{
            title: 'HOME',
            headerStyle: {backgroundColor: '#00334d'},
            headerTitleStyle: {fontWeight: 'bold'},
            headerTintColor: '#fff'}}
      />
      <Stack.Screen name="About" component={AboutScreen}
        options={{
            title: 'ABOUT',
            headerStyle: {backgroundColor: '#00334d'},
            headerTitleStyle: {fontWeight: 'bold'},
            headerTintColor: '#fff'}}
      />
      <Stack.Screen name="Products" component={ProductsScreen} 
        options={{
            title: 'PRODUCTS',
            headerStyle: {backgroundColor: '#00334d'},
            headerTitleStyle: {fontWeight: 'bold'},
            headerTintColor: '#fff'}}
      />
      <Stack.Screen name="Portfolio" component={PortfolioScreen}
        options={{
            title: 'PORTFOLIO',
            headerStyle: {backgroundColor: '#00334d'},
            headerTitleStyle: {fontWeight: 'bold'},
            headerTintColor: '#fff'}} 
      />
      <Stack.Screen name="Contact" component={ContactScreen}
         options={{
            title: 'CONTACT',
            headerStyle: {backgroundColor: '#00334d'},
            headerTitleStyle: {fontWeight: 'bold'},
            headerTintColor: '#fff'}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
    },
    buttons: {
        flex: 0.05, 
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#cce4ff',
        
    },
})

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
