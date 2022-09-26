import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import logo from './assets/bruschetta.png';

function HomeScreen({ navigation }) {
  
  const [numberOfServings, onChangeNumber] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={ styles.text }>
        Bruschetta Recipe  
      </Text>
      <Image source={logo} style={styles.logo} />


      <TextInput
        style={styles.textinput}
        placeholder="Enter the Number of Servings"
        onChangeText={onChangeNumber}
        value={numberOfServings}
        />

      <TouchableOpacity style={ styles.button } onPress={() => { navigation.navigate('Recipe', { numberOfServings, });}}>
        <Text style={ styles.buttonText }>View Recipe</Text>
      </TouchableOpacity>
    </View>
  )
}

function RecipeScreen({ route, navigation }) {
  const { numberOfServings } = route.params;
  return (
    <View style={ styles.recipeContainer }>
      <Text style={ styles.recipeTop }>Bruschetta</Text>
      <Text style={ styles.recipeHeading }>Ingredients</Text>
      <Text style={ styles.recipeText }>{ (numberOfServings*4) } Plum Tomatoes</Text>
      <Text style={ styles.recipeText }>{ (numberOfServings*6) } Basil Leaves</Text>
      <Text style={ styles.recipeText }>{ (numberOfServings*3) } garlic cloves, chopped</Text>
      <Text style={ styles.recipeText }>{ (numberOfServings*3) } TB olive oil</Text>
      <Text style={ styles.recipeHeading }>Directions</Text>
      <Text style={ styles.recipeText }>Combine the ingredients add salt to taste. Top French bread slices with mixture.</Text>
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Healthy Recipes" screenOptions={ styles.header }>
      <Stack.Screen name="Healthy Recipes" component={HomeScreen} />
      <Stack.Screen name="Recipe" component={RecipeScreen} options={{ title: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recipeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "#888888",
    padding: 10,
    marginTop: 20,
    marginBottom: 20
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  textinput: {
    height: 30,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 30,
    fontSize: 15,
    textAlign: 'center'
  },
  text: {
    padding: 10,
    fontSize: 36,
    marginBottom: 20,
    textAlign: 'center',
  },
  recipeText: {
    fontSize: 22,
    text: 20,
    textAlign: 'left',
    marginLeft: 50,
    marginRight: 20,
  },
  recipeHeading: {
    fontSize: 29,
    textAlign: 'left',
    marginLeft: 25,
    marginTop: 25,
  },
  recipeTop: {
    fontSize: 36,
    textAlign: 'center',
  },
  header: {
    headerStyle: { backgroundColor: '#f4511e', }, 
    headerTintColor: '#fff', 
    headerTitleStyle: { fontWeight: 'bold', fontSize: 18 },
  },
});
