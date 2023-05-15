import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/core';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button title='Go to Ali' onPress={()=>navigation.navigate('ali')}/>
    </View>
  )
}

export default HomeScreen

