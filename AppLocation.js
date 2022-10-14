import * as React from 'react';
import MapView, { Marker, Circle } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  const [pin, setPin] = React.useState({
    latitude: 37.296165925404495,
    longitude: 9.86878749496766
  })
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        initialRegion={{
          latitude: 37.296165925404495,
          longitude: 9.86878749496766,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.296165925404495, longitude: 9.86878749496766 }}
          title="Centre ville"
          description="Bizerte North Africa"
          pinColor="gold"
          draggable
          onDragStart={(e) => { console.log("Drag Start", e.nativeEvent) }}
          onDragEnd={(e) => { console.log("Drag End", e.nativeEvent.coordinate) 
          setPin({ 
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude
          })
        }
        }
        />
        <Circle center={ pin } radius={100} ></Circle>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
