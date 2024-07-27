import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Show from './Page/Show';
import Loan from './component/Loan';
import History from './component/History';
import Scanner from './Page/Scanner';
import Map from './Page/Map';
import NotificationScreen from './Page/NotificationScreen';
import MobileContact from './Screen/MobileContact';
import SelfAccountTransfer from './Screen/SelfAccountTransfer';
import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet } from 'react-native';


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

        <Stack.Screen
          name='Map'
          component={Map}
          options={{ headerShown: false }} />

        <Stack.Screen
          name='Notification'
          component={NotificationScreen}
          options={{headerRight:()=> (
            <AntDesign name="questioncircleo" size={20} color="white" style={styles.icon} />
          ),
            title: "Notifications",
            headerStyle: { backgroundColor: "#3f1e65"},
            headerTintColor: "white"
          }} />

        <Stack.Screen
          name='Mobile'
          component={MobileContact}
          options={{ headerShown: false }} />

        <Stack.Screen
          name='Self'
          component={SelfAccountTransfer}
          options={{
            title: "Self Account Transfer",
            headerStyle:styles.header ,
            headerTintColor: "white"
          }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon:{
    marginRight:20
  },
  header:{
    backgroundColor: "#3f1e65",
  }
})

export default App;



