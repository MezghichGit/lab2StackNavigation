import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View,Image, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
const DATA = [

    {
  
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      img: "https://img.cuisineaz.com/660x660/2013/12/20/i18445-margherite.webp",
      prix: "10€",
      ingredients: "Tomate, Fromage",
      title: "Marguerite",

    },
  
    {
  
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63asq",
      img: "https://cdn.pratico-pratiques.com/app/uploads/sites/3/2018/08/15142009/pizza-aux-fruits-de-mer.jpg",
      prix: "11€",
      ingredients: "Tomate, Fromage, fruits de mer",
      title: "Fruit de mer",
    },
  
    {
  
      id: "58694a0f-3da1-471f-bd96-145571e29d7ee2",
      img: "https://assets.afcdn.com/recipe/20161130/7916_w1024h778c1cx2808cy1872.webp",
      prix: "15€",
      ingredients: "Tomate, Fromage, jambon",
      title: "Calzone",
    },
    {
  
      id: "58694a0f-3da1-471f-bd96-145571e29d72za",
      img: "https://assets.afcdn.com/recipe/20161130/7916_w1024h778c1cx2808cy1872.webp",
      prix: "15€",
      ingredients: "Tomate, Fromage, jambon",
      title: "Calzone",
    },
  
    {
  
      id: "58694a0f-3da1-471f-bd96-145571e29d72et",
      img: "https://assets.afcdn.com/recipe/20161130/7916_w1024h778c1cx2808cy1872.webp",
      prix: "15€",
      ingredients: "Tomate, Fromage, jambon",
      title: "Calzone",
    },
  
    {
  
      id: "58694a0f-3da1-471f-bd96-145571e29d72rrf",
      img: "https://assets.afcdn.com/recipe/20161130/7916_w1024h778c1cx2808cy1872.webp",
      prix: "15€",
      ingredients: "Tomate, Fromage, jambon",
      title: "Calzone",
    },

    {
  
      id: "58694a0f-3da1-471f-bd96-145571e29d72rr",
      img: "https://assets.afcdn.com/recipe/20161130/7916_w1024h778c1cx2808cy1872.webp",
      prix: "15€",
      ingredients: "Tomate, Fromage, jambon",
      title: "Calzone",
    },

  ];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={styles.row}>
        <Image style={styles.logo}  source={{ uri: item.img}}/>
        <View style={styles.col}>
           <Text style={[styles.title, textColor]}>Titre : {item.title}</Text>
           <Text style={[styles.title, textColor]}>Prix : {item.prix}</Text>
           <Text style={[styles.title, textColor]}>Ingrédients : {item.ingredients}</Text>
        </View>
     </View>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const monItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={monItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
  },
  
  row: {
    flex:1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  col: {
    flex:0.5,
    flexDirection: "col",
    flexWrap: "wrap",
    marginHorizontal:10
  },
  logo: {
    flex:0.5,
    width: 100,
    height: 150,
  },
});

export default App;
