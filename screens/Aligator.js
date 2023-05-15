import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location'


export default function Aligator() {
  const [location, setLocation] = useState();

  useEffect(() => {
    const getPermissions = async () =>{
      let {status} = await Location.requestForegroundPermissionsAsync();
      console.log(status);
      if(status !== 'granted'){
        console.log("Please grant the location permissions");
        return;
      }
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      console.log("Location:");
      console.log(currentLocation);
    };
    getPermissions();
  },[]);

  const reverseGeocode = async () => {
    const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
      longitude: location.coords.longitude,
      latitude: location.coords.latitude,
    });
    console.log("Reverse Geocoded:");
    console.log(reverseGeocodedAddress);
  }

  return (
    <View style={styles.container}>
        <StatusBar style="auto"/>
        <Text>Are bhai</Text>
        <Button title="Get Loaction" onPress={reverseGeocode}/>
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
});
