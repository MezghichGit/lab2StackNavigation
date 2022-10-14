
import React, { useState, useEffect } from "react";
import {  Text, Button,TextInput,SafeAreaView} from 'react-native';
import styles from '../style';
const AddUser=({navigation }) => {


    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    let newUser = {
        nom:nom,
        prenom:prenom,
        email:email,
        password:password
    }
    const addUserData = ()=> {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        };
        fetch('http://127.0.0.1:8000/api/pharma/users', requestOptions)
            .then(response => {
                response.json();
                setTimeout(navigation.push('ListUsers'),3000)
              })
    }
    return (
        <SafeAreaView>
            <Text style={styles.titreText}>Interface création d'un User</Text>
            <Text>Nom : </Text>
            <TextInput
                style={styles.input}
                onChangeText={setNom}
                value={nom}
            />
            <Text>Prenom : </Text>
            <TextInput
                style={styles.input}
                onChangeText={setPrenom}
                value={prenom}

            />
            <Text>Email : </Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}

            />
            <Text>Password : </Text>
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}

            />
            <Button title="Ajouter" onPress={addUserData}></Button>
        </SafeAreaView>
    );

}

export default  AddUser;