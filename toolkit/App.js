// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import Screen1 from './screen/screen1';
import Screen2 from './screen/screen2';
import Screen3 from './screen/screen3';
import store from './store';  // Import store đã cấu hình

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>  {/* Cung cấp store cho toàn bộ ứng dụng */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen2">
          <Stack.Screen name="Screen1" component={Screen1} options={{ headerShown: false }} />
          <Stack.Screen name="Screen2" component={Screen2} options={{ headerShown: false }} />
          <Stack.Screen name="Screen3" component={Screen3} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
