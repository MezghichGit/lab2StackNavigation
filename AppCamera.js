import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {Camera} from 'expo-camera'
export default function App() {
    const [startCamera,setStartCamera] = React.useState(false)
    let camera;
    const fnStartCamera = async () => {
        const {status} = await Camera.requestPermissionsAsync()
        if (status === 'granted') {
          // start the camera
          setStartCamera(true)
        } else {
          console.log('Access denied')
        }
      }

  return startCamera ? (
    <Camera
      style={{flex: 1,width:"100%"}}
      ref={(r) => {
        camera = r
      }}
    ></Camera>
  ) : (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity
        onPress={fnStartCamera}
          style={{
            width: 130,
            borderRadius: 4,
            backgroundColor: '#14274e',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            Take picture
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})