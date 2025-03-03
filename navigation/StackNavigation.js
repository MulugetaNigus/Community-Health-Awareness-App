// navigation/StackNavigation.js  
import React from 'react';  
import { createStackNavigator } from '@react-navigation/stack';  
import SchedulingInfo from './screens/SchedulingInfo';  
import SchedulingDetail from './screens/SchedulingDetail';  
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();  

const StackNavigation = () => {  
  return (  
    <Stack.Navigator>  
    <Stack.Screen   
        name="Home"  
        component={HomeScreen}  
        options={{ title: 'Home' }}  
      />  
      <Stack.Screen   
        name="SchedulingList"  
        component={SchedulingInfo}  
        options={{ title: 'Scheduled Appointments' }}  
      />  
      <Stack.Screen   
        name="SchedulingDetail"   
        component={SchedulingDetail}   
        options={{ title: 'Schedule Details' }}  
      />  
    </Stack.Navigator>  
  );  
};  

export default StackNavigation;