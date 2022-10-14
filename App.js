import { StatusBar } from 'expo-status-bar';
import { Image,TextInput,PermissionsAndroid, StyleSheet, Text, View, Button, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState, useEffect } from "react";
import Geolocation from 'react-native-geolocation-service';
import { Checkbox, RadioButton } from "react-native-paper";
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

const SuccessRegistration = ({navigation}) =>{
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Félicitations compté créer avec succès!</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const ContactScreen = ({navigation})=> {
  const [name, onChangeName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [value, setValue] = useState("pro");
  const [checkedReact, setCheckedReact] = useState(false);
  const [checkedReactNative, setCheckedReactNative] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [choixReact, setChoixReact] = useState("");
  const [choixRean, setChoixRean] = useState("");


  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <Image
        style={styles.logo}
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1337422975151255553/AkeDXoIV_400x400.png',
        }} />

      <Text>Formulaire d'inscription:</Text>
      
      <View style={styles.hContainer}>
        <Text style={styles.label}>Nom: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="Name"
        />
      </View>

      <View style={styles.hContainer}>
        <Text style={styles.label}>Email: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Email"
        />
      </View>
      <View style={styles.hContainer}>
        <Text style={styles.label}>Password: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
          keyboardType="numeric"
          textContentType={password}
          secureTextEntry={true}
        />
      </View>

      <Text>Vous êtes :</Text>
      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
        <View style={styles.radio}>
          <RadioButton value="pro" />
          <Text>Pro</Text>
        </View>
        <View style={styles.radio}>
          <RadioButton value="etudiant" />
          <Text>Etudiant</Text>
        </View>
      </RadioButton.Group>


      <Text>Vous préférer:</Text>
      <View style={styles.checkbox}>
        <Checkbox
          status={checkedReact ? 'checked' : 'unchecked'}
          onPress={() => {
            setCheckedReact(!checkedReact);
            setChoixReact("React");
          }}
        />
        <Text>React</Text>
      </View>
      <View style={styles.checkbox}>
        <Checkbox
          status={checkedReactNative ? 'checked' : 'unchecked'}
          onPress={() => {
            setCheckedReactNative(!checkedReactNative);
            setChoixRean("React Native");
          }}
        />
        <Text>React Native</Text>
      </View>


   <Button title="Créer compte" onPress={
    ()=>{
      console.log(name+" "+email+" "+password+" "+value+" "+choixRean+" "+choixReact);
      //setChoixRean("");
      //setChoixReact("");
      setCheckedReact(false);
      setCheckedReactNative(false);
      navigation.navigate('SuccessRegistration');
    }}></Button>
    </View>
  );
}

  // Function to get permission for location
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      console.log('granted', granted);
      if (granted === 'granted') {
        console.log('You can use Geolocation');
        return true;
      } else {
        console.log('You cannot use Geolocation');
        return false;
      }
    } catch (err) {
      return false;
    }
  };
  
function LocationScreen() {

// state to hold location
const [location, setLocation] = useState(false);

  // function to check permissions and get Location
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      console.log('res is:', res);
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            console.log(position);
            setLocation(position);
          },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      }
    });
    console.log(location);
  };
return (
    <View style={styles.containerLocation}>
      <Text>Get your location!</Text>
      <View
        style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button title="Get Location" onPress={getLocation} />
      </View>
      <Text>Latitude: {location ? location.coords.latitude : null}</Text>
      <Text>Longitude: {location ? location.coords.longitude : null}</Text>
      <View
        style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
        <Button title="Send Location" />
      </View>
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
      <Stack.Screen name="SuccessRegistration" component={SuccessRegistration}></Stack.Screen>
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
          else if (route.name == "Location") { iconName = "location"; }
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
      <Tab.Screen name="Location" component={LocationScreen} />
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
  logo: {
    height: 50,
    width: 50,
    margin: 'auto'
  },
  label: {
    flex: 0.1
  },
  input: {
    flex: 0.9,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    marginTop: 20
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center"
  },
  radio: {
    flexDirection: "row",
    alignItems: "center"
  },
   hContainer:{ marginTop: 20, marginBottom: 20, flex: 1, flexDirection: 'row', alignItems: 'center' },
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
  containerLocation: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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