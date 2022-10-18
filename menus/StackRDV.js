
import ListRDV from '../components/ListRDV';
import AddUser from '../components/AddUser';
import DetailsRDV from '../components/DetailsRDV';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const StackRDV = ()=> {
    return (
        <Stack.Navigator initialRouteName='ListRDV' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ListRDV" component={ListRDV}></Stack.Screen>
           <Stack.Screen name="AddUser" component={AddUser}></Stack.Screen> 
            <Stack.Screen name="DetailsRDV" component={DetailsRDV}></Stack.Screen>
        </Stack.Navigator>
    );
}

export default StackRDV;