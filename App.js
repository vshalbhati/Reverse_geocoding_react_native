import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Aligator from './screens/Aligator';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='home' component={HomeScreen}/>
          <Stack.Screen name='ali' component={Aligator}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}
