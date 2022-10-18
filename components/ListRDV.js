import styles from '../style';
import React, { useState, useEffect } from "react";
import { Image, TextInput, PermissionsAndroid, StyleSheet, Text, View, Button, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';


/***** Composant Flat ListItem */
const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>Identifaint RDV : {item.id}</Text>
        <Text style={[styles.title, textColor]}>Libelle : {item.libele}</Text>
        <Text style={[styles.title, textColor]}>Bien : {item.bienss}</Text>
        <Text style={[styles.title, textColor]}>Téléphone :{item.telb}</Text>
        <Text style={[styles.title, textColor]}>Date RDV : {item.datetime}</Text>
    </TouchableOpacity>
);
/******* Fin du FlatList */


const ListRDV = ({ navigation }) => {
    const [selectedId, setSelectedId] = useState(null);
    const [rdvs, setRdvs] = useState([]);
    const [fetchedState, setFetchedState] = useState(null);

    useEffect(
        () => {
            setFetchedState('Loading');
            setTimeout(() => getData(), 1000);
        }, []
    );
    const getData = async () => {
        const response = await fetch('http://127.0.0.1:8000/routes/api/rendezvouses.json')
        const data = await response.json();
        //console.log(data)
        setRdvs(data)
        setFetchedState(null);

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
                    //navigation.navigate('DetailsUser', { userId: item.id })
                    navigation.navigate('DetailsRDV', { rdvId: item.id })
                }
                }
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Button title="Ajouter un rendez-vous" onPress={()=>navigation.navigate('AddUser')}></Button> 
            <Text style={styles.titreText}>Liste des Rendez-vous</Text>
            {
                fetchedState ? <ActivityIndicator size="large" color="#0000ff" /> :
                    <FlatList
                        data={rdvs}
                        renderItem={renderItem}
                    />
    }
        </SafeAreaView>
    );

}
}

export default ListRDV;