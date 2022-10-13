import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState, useEffect } from "react";

/***** Composant Flat ListItem */
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.id}</Text>
    <Text style={[styles.title, textColor]}>{item.name}</Text>
    <Text style={[styles.title, textColor]}>{item.username}</Text>
    <Text style={[styles.title, textColor]}>{item.email}</Text>
    <Text style={[styles.title, textColor]}>{item.address.street}</Text>
  </TouchableOpacity>
);
/******* Fin du FlatList */

// Partie 2 :  Modèle de navigation en Tab
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ecran d'accuiel!</Text>
    </View>
  );
}


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

const ListUsers = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [users, setUsers] = useState([]);
  const [fetchedState, setFetchedState] = useState(null);

  useEffect(
    () => {
      setFetchedState('Loading');
      setTimeout(() => getData(), 1000);
    }, []
  );
  const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUsers(data)
    setFetchedState(null);
    //console.log(data)
  }
  /////
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id)
          //console.log(item.id)
          navigation.navigate('DetailsUser', { userId: item.id })
        }
        }
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titreText}>Liste des Users</Text>
      {
        fetchedState ? <ActivityIndicator size="large" color="#0000ff" /> :
          <FlatList
            data={users}
            renderItem={renderItem}
          />
      }
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

const DetailsUser = ({ navigation, route }) => {
  const userId = route.params.userId;
  let [allUserData, setAllUserData] = useState({});
  let [fetchedState, setFetchedState] = useState(null);

  useEffect(() => {
    setFetchedState('loading')
    setTimeout(()=>getAllUserData(),300);
  },[])

  const getAllUserData=async()=>{
    try{
      const response=await  fetch('https://jsonplaceholder.typicode.com/users/' + userId);
      const data=await response.json();
      setAllUserData(data)
      console.log(data);
     
    }
    catch(error){
      console.log("Vérifier votre api...");
    }
    finally{
      setFetchedState(null);
      
    }
  }

  return (

    <SafeAreaView style={styles.container}>
        {
      fetchedState ?  <ActivityIndicator size="large" color="#0000ff" /> :
      <View>
      <Text style={styles.titreText}>Détails User : {allUserData.id}</Text>
      <Text style={styles.titreText}>Name : {allUserData.name}</Text>
      <Text style={styles.titreText}>Username : {allUserData.username}</Text>
      <Text style={styles.titreText}>Phone : {allUserData.phone}</Text>
      <Text style={styles.titreText}>Email : {allUserData.email}</Text>
      <Text style={styles.titreText}>Website : {allUserData.website}</Text>
      <Text style={styles.titreText}>Adress, Street : {allUserData.address && allUserData.address.street}</Text>
      <Text style={styles.titreText}>Zip Code : {allUserData.address && allUserData.address.zipcode}</Text>
      </View>
      }
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  
  );
}
function StackUser() {
  return (
    <Stack.Navigator initialRouteName='ListUsers' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ListUsers" component={ListUsers}></Stack.Screen>
      <Stack.Screen name="AddUser" component={AddUser}></Stack.Screen>
      <Stack.Screen name="DetailsUser" component={DetailsUser}></Stack.Screen>
    </Stack.Navigator>
  );
}

/******* fin partie Stack *****/
const Tab = createBottomTabNavigator();  //Création du Tab Navigator

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;
          if (route.name == "Home") { iconName = "home-outline"; }
          else if (route.name == "Settings") { iconName = "settings-outline"; }
          else if (route.name == "Users") { iconName = "people-circle"; }
          else { iconName = "mail"; }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container2: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#43a1c9',
  },
  titreText: {
    fontSize: 20,
    textAlign: 'center'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 20
  },
  title: {
    fontSize: 24,
  }
});