import styles from '../style';
import React, { useState, useEffect } from "react";
import { Text, View, Button, SafeAreaView,ActivityIndicator } from 'react-native';

const DetailsRDV = ({ navigation, route }) => {
    const rdvId = route.params.rdvId;
    let [allRdvData, setAllRdvData] = useState({});
    let [fetchedState, setFetchedState] = useState(null);

    useEffect(() => {
        setFetchedState('loading')
        setTimeout(() => getAllUserData(), 300);
    }, [])

    const getAllUserData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/routes/api/rendezvouses.json/' + rdvId);
           //const response = await fetch('http://127.0.0.1:8000/api/pharma/users/' + userId);
           const data = await response.json();
           console.log(data);
           setAllRdvData(data)
            

        }
        catch (error) {
            console.log("Vérifier votre api...");
        }
        finally {
            setFetchedState(null);

        }
    }

/*
    const deleteUser =  (userId) => {

        fetch('http://127.0.0.1:8000/api/pharma/users/'+userId,{ method: 'DELETE' })
        .then((response) => {
         response.text();
         navigation.push('ListUsers')
       })
       .then((result) => console.log(result))
       .catch((error) => console.log(error));
     };*/
   

    return (

        <SafeAreaView style={styles.container}>
            {
                fetchedState ? <ActivityIndicator size="large" color="#0000ff" /> :
                    <View>
                      
                      <Text style={styles.titreText}>Détails User : {allRdvData.id}</Text>
                      {/*
                      <Text style={styles.titreText}>Name : {allUserData.name}</Text>
                        <Text style={styles.titreText}>Username : {allUserData.username}</Text>
                        <Text style={styles.titreText}>Phone : {allUserData.phone}</Text>
                        <Text style={styles.titreText}>Email : {allUserData.email}</Text>
                        <Text style={styles.titreText}>Website : {allUserData.website}</Text>
                        <Text style={styles.titreText}>Adress, Street : {allUserData.address && allUserData.address.street}</Text>
                        <Text style={styles.titreText}>Zip Code : {allUserData.address && allUserData.address.zipcode}</Text>
                      */ }  
                      
                     {/* <Text style={styles.titreText}>Détails User : {allUserData.id}</Text>
                        <Text style={styles.titreText}>Nom : {allUserData.nom}</Text>
                        <Text style={styles.titreText}>Prénom : {allUserData.prenom}</Text>
                        <Text style={styles.titreText}>Mot de passe : {allUserData.password}</Text>
                        <Text style={styles.titreText}>Email : {allUserData.email}</Text> */} 
                    </View>
            }
            <Button title="Go back" onPress={() => navigation.goBack()} />
            {/*<Button  title="Supprimer" color="red" onPress={() => deleteUser(allUserData.id)} />*/}
        </SafeAreaView>

    );
}

export default DetailsRDV;