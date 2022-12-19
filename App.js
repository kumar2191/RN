import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home'
import Register from './Screens/Students/Register'
import Login from './Screens/Students/Login'
import CashierLogin from './Screens/Cashier/Login'
import Screen from './Custom/Screen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import Profile from './Screens/Students/Profile'
import EditProfile from './Screens/Students/EditProfile'
import ChangePassword from './Screens/Students/ChangePassWord'
import FineList from './Screens/Students/FineList'
export default function App() {
  const Stack= createStackNavigator();
  return (
    <Screen >

      {/* <Home /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <CashierLogin /> */}
      {/* <Profile /> */}
      {/* <EditProfile /> */}
      {/* <ChangePassword /> */}
      {/* <FineList /> */}
       <NavigationContainer>
        <Stack.Navigator>
          {/* User */}
                          <Stack.Screen name="home" component={Home} options={{headerShown:false}}/>
                          <Stack.Screen name="StudentLogin" component={Login} options={{headerShown:true}}/>
                          <Stack.Screen name="StudentRegisteration" component={Register} options={{ headerShown: true }} />
                          <Stack.Screen name="StudentProfile" component={Profile} options={{headerShown:true}}/>
                          <Stack.Screen name="StudentEditProfile" component={EditProfile} options={{headerShown:true}}/>
                          <Stack.Screen name="StudentChangePassword" component={ChangePassword} options={{headerShown:true}}/>
                          <Stack.Screen name="StudentFineList" component={FineList} options={{headerShown:true}}/>
          {/* Cashier */}
                                    <Stack.Screen name="CashierLogin" component={CashierLogin} options={{headerShown:true}}/>

            </Stack.Navigator>
        </NavigationContainer>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
});
