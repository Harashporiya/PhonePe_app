import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Show from './Page/Show';
import Loan from './component/Loan';
import History from './component/History';
import Scanner from './Page/Scanner';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Show">
        <Stack.Screen
          name="Show"
          component={Show}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Loan"
          component={Loan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
        name='History'
        component={History}
        options={{ headerShown: false }}
        />
        <Stack.Screen
        name='Scan'
        component={Scanner}
        options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

