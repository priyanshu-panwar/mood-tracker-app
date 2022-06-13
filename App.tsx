import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomTabsNavigator } from './screens/BottomTabs.navigator';

const App: React.FC = () => {
  return (
  <NavigationContainer>
    <BottomTabsNavigator />
  </NavigationContainer>    
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

export default App;