import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from "react";
/*const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  }
];*/

// 1)le composant modèle qu'on va afficher dans la FlatList
/*const Item = ({ title, id }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{id}</Text>
    <Text style={styles.title}>{title}</Text>
  </View>
);*/

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.id}</Text>
        <Text style={[styles.title, textColor]}>{item.name}</Text>
        <Text style={[styles.title, textColor]}>{item.username}</Text>
        <Text style={[styles.title, textColor]}>{item.email}</Text>
        <Text style={[styles.title, textColor]}>{item.address.street}</Text>
    </TouchableOpacity>
);
const FlatListApp = () => {

    const [selectedId, setSelectedId] = useState(null);
    const [users, setUsers] = useState([]);
    // users variable locale à la méthode


    //const DATA = users;
    useEffect(() => { getData(); }, []);

    /*
      const getData=()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>{
          setUsers(data);
          console.log(data);
        })
      }*/
    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsers(data)
        console.log(data)
    }
    // let users = [];
    /*const renderItem = ({ item }) => (
      <Item title={item.title} id={item.id}/>
    );*/

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => {
                    setSelectedId(item.id);
                    console.log(item.id)
                }
                }
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={users}
                renderItem={renderItem}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 20
    },
    title: {
        fontSize: 24,
    },
});

export default FlatListApp;