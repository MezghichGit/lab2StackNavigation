import { Image, TextInput, PermissionsAndroid, StyleSheet, Text, View, Button, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState} from "react";
const SuccessRegistration = ({ navigation }) => {
    //let parsed;
    //const [userData,setUser] = useState({})
    const displayData = async () => {
        try {
            let user = await AsyncStorage.getItem('user');  
            let parsed = JSON.parse(user);  
            console.log(parsed);  
      
        }
        catch (error) {
            alert(error)
        }
    }

    displayData();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Félicitations compté créer avec succès!</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />

            <Button title="Clear Storage" onPress={() => AsyncStorage.removeItem('user')} />
        </View>
    );
}

export default SuccessRegistration;