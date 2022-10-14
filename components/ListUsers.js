import styles from '../style';
import React, { useState, useEffect } from "react";
import { Image, TextInput, PermissionsAndroid, StyleSheet, Text, View, Button, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';


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

export default ListUsers;