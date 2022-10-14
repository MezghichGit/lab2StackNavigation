import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import SuccessRegistration from '../components/SuccessRegistration';
import ContactScreen from '../components/ContactScreen';
function StackContact() {
    return (
        <Stack.Navigator initialRouteName='ContactRoute' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ContactRoute" component={ContactScreen}></Stack.Screen>
            <Stack.Screen name="SuccessRegistration" component={SuccessRegistration}></Stack.Screen>
        </Stack.Navigator>
    );
}

export default StackContact;
