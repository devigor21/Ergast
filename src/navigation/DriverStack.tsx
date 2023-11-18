import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DriverListScreen from '../screens/DriverListScreen';
import DriverDetailScreen from '../screens/DriverDetailScreen';
import ResultListScreen from '../screens/ResultListScreen';

const Stack = createNativeStackNavigator();

const DriverStack = () => {
  const headerTitle = ({ children }: { children: string }) => (
    <Text>{children}</Text>
  );

  return (
    <Stack.Navigator>
      <Stack.Screen name="DriverList" component={DriverListScreen} />
      <Stack.Screen name="DriverDetail" component={DriverDetailScreen} />
      <Stack.Screen
        options={{ headerTitle }}
        name="ResultList"
        component={ResultListScreen}
      />
    </Stack.Navigator>
  );
};

export default DriverStack;
