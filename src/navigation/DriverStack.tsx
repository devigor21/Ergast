import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DriverListScreen from '../screens/DriverListScreen';
import DriverDetailScreen from '../screens/DriverDetailScreen';

const Stack = createNativeStackNavigator();

const DriverStack = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="DriverList"
        component={DriverListScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="DriverDetail"
        component={DriverDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default DriverStack;
