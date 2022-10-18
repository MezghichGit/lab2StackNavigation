/*****Partie Stack  ********/
import StackUser from './StackUser';
import  StackContact from './StackContact';
import StackRDV from './StackRDV';
import HomeScreen from '../components/HomeScreen';
import SettingsScreen from '../components/SettingsScreen';
import LocationScreen from  '../components/LocationScreen';


import Geolocation from 'react-native-geolocation-service';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
                    else if (route.name == "RDV") { iconName = "alarm"; }
                    else { iconName = "mail"; }
                    return (
                        <Ionicons
                            name={iconName}
                            color={'blue'}
                            size={18}
                        />
                    );
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="RDV" component={StackRDV} />
            <Tab.Screen name="Users" component={StackUser} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Location" component={LocationScreen} />
            <Tab.Screen name="Contact" component={StackContact} />
        </Tab.Navigator>
    );
}

export default MyTabs;