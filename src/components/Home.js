import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

function HomeScreen2() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings1!</Text>
      </View>
    );
  }
  
  function SettingsScreen2() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  

class HomeScreen extends Component {
    render() {
        return (
            <NavigationContainer independent={true}>
             <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen2} />
              <Tab.Screen name="About" component={SettingsScreen2} />
            </Tab.Navigator>
          </NavigationContainer>
        );
    }
}
export default HomeScreen;