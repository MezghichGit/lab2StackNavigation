import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity } from 'react-native';
import React, { useState } from "react";
const DATA = [
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
];

// 1)le composant modèle qu'on va afficher dans la FlatList
/*const Item = ({ title, id }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{id}</Text>
    <Text style={styles.title}>{title}</Text>
  </View>
);*/

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );

const FlatListApp = () => {

  const [selectedId, setSelectedId] = useState(null);

  /*const renderItem = ({ item }) => (
    <Item title={item.title} id={item.id}/>
  );*/

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={  () =>{ 
                          setSelectedId(item.id); 
                          console.log(item.id)}
                        }
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
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
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FlatListApp;