import { Image, TextInput, PermissionsAndroid, StyleSheet, Text, View, Button, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState} from "react";
import { Checkbox, RadioButton } from "react-native-paper";
import styles from '../style';
const ContactScreen = ({ navigation }) => {
    const [name, onChangeName] = useState("");
    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const [value, setValue] = useState("pro");
    const [checkedReact, setCheckedReact] = useState(false);
    const [checkedReactNative, setCheckedReactNative] = useState(false);
    // const [isSelected, setSelection] = useState(false);
    const [choixReact, setChoixReact] = useState("");
    const [choixRean, setChoixRean] = useState("");


    const clearForm = () => {
        onChangeName("");
        onChangeEmail("");
        onChangePassword("");
        setValue('pro');
        setCheckedReact(false);
        setCheckedReactNative(false);
    }
    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Image
                style={styles.logo}
                source={{
                    uri: 'https://pbs.twimg.com/profile_images/1337422975151255553/AkeDXoIV_400x400.png',
                }} />

            <Text>Formulaire d'inscription:</Text>

            <View style={styles.hContainer}>
                <Text style={styles.label}>Nom: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeName}
                    value={name}
                    placeholder="Name"
                />
            </View>

            <View style={styles.hContainer}>
                <Text style={styles.label}>Email: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholder="Email"
                />
            </View>
            <View style={styles.hContainer}>
                <Text style={styles.label}>Password: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    value={password}
                    placeholder="Password"
                    keyboardType="numeric"
                    textContentType={password}
                    secureTextEntry={true}
                />
            </View>

            <Text>Vous êtes :</Text>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={styles.radio}>
                    <RadioButton value="pro" />
                    <Text>Pro</Text>
                </View>
                <View style={styles.radio}>
                    <RadioButton value="etudiant" />
                    <Text>Etudiant</Text>
                </View>
            </RadioButton.Group>


            <Text>Vous préférer:</Text>
            <View style={styles.checkbox}>
                <Checkbox
                    status={checkedReact ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setCheckedReact(!checkedReact);
                        setChoixReact("React");
                    }}
                />
                <Text>React</Text>
            </View>
            <View style={styles.checkbox}>
                <Checkbox
                    status={checkedReactNative ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setCheckedReactNative(!checkedReactNative);
                        setChoixRean("React Native");
                    }}
                />
                <Text>React Native</Text>
            </View>


            <Button title="Créer compte" onPress={
                () => {
                    console.log(name + " " + email + " " + password + " " + value + " " + choixRean + " " + choixReact);
                    clearForm();
                    navigation.navigate('SuccessRegistration');
                }}></Button>
        </View>
    );
}
export default ContactScreen;