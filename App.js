import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// premier composant : Le systeme de navigation en Stack
const Stack = createNativeStackNavigator();
// deuxième composant : screen Home
const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane', age:30 })
      }
    />
  );
};

// troisième composant : screen profil
const ProfileScreen = ({ navigation, route }) => {
  return (
    <View>
      
      <Text>This is {route.params.name}'s profile</Text>
      
      <Text>{route.params.name} age :  {route.params.age}</Text>
      
      <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
      )};





export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'My Profile' }} />
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
});
