import styles from '../style';
import React, { useState, useEffect } from "react";
import { Text, View, Button, SafeAreaView,ActivityIndicator } from 'react-native';

const DetailsUser = ({ navigation, route }) => {
    const userId = route.params.userId;
    let [allUserData, setAllUserData] = useState({});
    let [fetchedState, setFetchedState] = useState(null);

    useEffect(() => {
        setFetchedState('loading')
        setTimeout(() => getAllUserData(), 300);
    }, [])

    const getAllUserData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/' + userId);
            const data = await response.json();
            setAllUserData(data)
            console.log(data);

        }
        catch (error) {
            console.log("Vérifier votre api...");
        }
        finally {
            setFetchedState(null);

        }
    }

    return (

        <SafeAreaView style={styles.container}>
            {
                fetchedState ? <ActivityIndicator size="large" color="#0000ff" /> :
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

export default DetailsUser;