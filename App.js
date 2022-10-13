import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Partie 1 :  Modèle de navigation en Stack
/*
// premier composant : Le systeme de navigation en Stack
const Stack = createNativeStackNavigator();
// deuxième composant : screen Home
const HomeScreen = ({ navigation }) => {
  return (
    <View>
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane', age:30 })
      }
    />
    <Button style={styles.btnMarge}
      title="Logout"
      onPress={() =>
        navigation.navigate('Authentification')
      }
    />
    </View>
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


  const AuthentificationScreen = ({ navigation }) => {
        return (
          <Button
            title="Authentification"
            onPress={() =>
              navigation.navigate('Home')
            }
          />
        );
      };


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Authentification' screenOptions={{headerShown: true}}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'My Profile' }} />
        <Stack.Screen name="Authentification" component={AuthentificationScreen} options={{ title: 'Connexion' }} />
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

  btnMarge: {
    margin:10 ,
  },
});
*/

// Partie 2 :  Modèle de navigation en Tab
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}
/*
function UsersScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Users!</Text>
    </View>
  );
}*/

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function ContactScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contact us!</Text>
    </View>
  );
}

/*****Partie Stack  ********/
const Stack = createNativeStackNavigator();
/*function ListUsers() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ListUsers!</Text>
    </View>
  );
}*/

const ListUsers =({navigation})=>{

  // const [users, setUsers] = useState([]);
  // const [fetchedState, setFetchedState] = useState(null);

  return (

   <SafeAreaView style={styles.container}>
     <Text style={styles.titreText}>Liste des Users</Text>
     <Button onPress={()=>navigation.navigate('AddUser')} title="Vers Add" />
   </SafeAreaView>
 
 );

}


function AddUser() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>AddUser</Text>
    </View>
  );
}
function StackUser() {
  return (
            <Stack.Navigator initialRouteName='ListUsers' screenOptions={{headerShown: true}}>
            <Stack.Screen name="ListUsers" component={ListUsers}></Stack.Screen>
            <Stack.Screen name="AddUser" component={AddUser}></Stack.Screen>
            </Stack.Navigator>
  );
}

/******* fin partie Stack *****/
const Tab = createBottomTabNavigator();  //Création du Tab Navigator

const MyTabs = () =>{
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: () => {
        let iconName;
        if (route.name == "Home") { iconName = "home-outline"; }
        else if (route.name == "Settings") { iconName = "settings-outline"; }
        else if(route.name == "Users") { iconName = "people-circle"; }
        else  { iconName = "mail"; }
        return (
          <Ionicons
            name={iconName}
            color={'red'}
            size={18}
          />
        );
      },
    })}
>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Users" component={StackUser} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles =  StyleSheet.create({
  container: {
    padding: 10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#43a1c9',
  },
  titreText: {
    fontSize: 20,
    textAlign: 'center'
  }
});
