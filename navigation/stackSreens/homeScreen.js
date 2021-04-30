import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.buttons}>
        <Button 
            title="Home" onPress={() => navigation.navigate('Home')}/>
        <Button
            title="About" onPress={() => navigation.navigate('About')}/>
        <Button
            title="Products" onPress={() => navigation.navigate('Products')}/>
        <Button
            title="Portfolio" onPress={() => navigation.navigate('Portfolio')}/>
        <Button
          title="Contact"onPress={() => navigation.navigate('Contact')}/>
    </View>
  );
}
function AboutScreen({ navigation }) {
    return (
        <View style={styles.buttons}>
        <Button 
            title="Home" onPress={() => navigation.navigate('Home')}/>
        <Button
            title="About" onPress={() => navigation.navigate('About')}/>
        <Button
            title="Products" onPress={() => navigation.navigate('Products')}/>
        <Button
            title="Portfolio" onPress={() => navigation.navigate('Portfolio')}/>
        <Button
          title="Contact"onPress={() => navigation.navigate('Contact')}/>
    </View>
    );
  }

function ProductsScreen({ navigation }) {
  return (
    <View style={styles.buttons}>
        <Button 
            title="Home" onPress={() => navigation.navigate('Home')}/>
        <Button
            title="About" onPress={() => navigation.navigate('About')}/>
        <Button
            title="Products" onPress={() => navigation.navigate('Products')}/>
        <Button
            title="Portfolio" onPress={() => navigation.navigate('Portfolio')}/>
        <Button
          title="Contact"onPress={() => navigation.navigate('Contact')}/>
    </View>
  );
}

function PortfolioScreen({ navigation }) {
    return (
        <View style={styles.buttons}>
        <Button 
            title="Home" onPress={() => navigation.navigate('Home')}/>
        <Button
            title="About" onPress={() => navigation.navigate('About')}/>
        <Button
            title="Products" onPress={() => navigation.navigate('Products')}/>
        <Button
            title="Portfolio" onPress={() => navigation.navigate('Portfolio')}/>
        <Button
          title="Contact"onPress={() => navigation.navigate('Contact')}/>
    </View>
    );
}

function ContactScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Button title="Portfolio" onPress={() => navigation.goBack()} />
    </View>
  
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Portfolio" component={PortfolioScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
    buttons: {
        flex: 1, 
        alignItems: 'center',
        flexDirection: 'row'
    }
})

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
