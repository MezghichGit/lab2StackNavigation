
import ListUsers from '../components/ListUsers';
import AddUser from '../components/AddUser';
import DetailsUser from '../components/DetailsUser';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const StackUser = ()=> {
    return (
        <Stack.Navigator initialRouteName='ListUsers' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ListUsers" component={ListUsers}></Stack.Screen>
            <Stack.Screen name="AddUser" component={AddUser}></Stack.Screen>
            <Stack.Screen name="DetailsUser" component={DetailsUser}></Stack.Screen>
        </Stack.Navigator>
    );
}

export default StackUser;