/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Cards from './components/Cards';
import data from './data/HomeButtons';
import AntDesign from 'react-native-vector-icons/Entypo';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Allapp from './components/ALLapp/Allapp'
import AddTable from './components/main/AddTable'
import MyExtension from  './components/main/MyExtension'
import ReadyToPack from  './components/main/ReadyToPack'
import Mytable from  './components/main/Mytable'
import Login from './components/authscreen/Login';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import TableDetail from "./components/DetailsScreens/TableDetail"
import {persistor, store} from './store';
import C1Tables from './components/BRANCH/C1Tables';
import C2Tables from './components/BRANCH/C2Tables';
import {PersistGate} from 'redux-persist/integration/react';
import splashscreen from './components/authscreen/splashscreen';
const Stack = createNativeStackNavigator();
AntDesign.loadFont();
const App = () => {
  
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="splashscreen"
          component={splashscreen}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ALLapp"
          component={Allapp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddTable"
          component={AddTable}
         // options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyExtension"
          component={MyExtension}
         // options={{headerShown: false}}
        />
        <Stack.Screen
          name="ReadyToPack"
          component={ReadyToPack}
         // options={{headerShown: false}}
        />
        <Stack.Screen
          name="Mytable"
          component={Mytable}
          //options={{headerShown: false}}
        />
        <Stack.Screen
          name="TableDetail"
          component={TableDetail}
          //options={{headerShown: false}}
        />
        <Stack.Screen
          name="C1Tables"
          component={C1Tables}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="C2Tables"
          component={C2Tables}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
