import { Image, TextInput, PermissionsAndroid, StyleSheet, Text, View, Button, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
const SuccessRegistration = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Félicitations compté créer avec succès!</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default SuccessRegistration;