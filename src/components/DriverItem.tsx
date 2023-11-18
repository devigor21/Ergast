import { View, StyleSheet, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import type { Driver } from '../types/driver';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DriverStackParamList } from '../types/navigation';

type Props = {
  driver: Driver;
};

const DriverItem = ({ driver }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<DriverStackParamList>>();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('DriverDetail', driver)}>
      <View style={styles.item}>
        <Text>{driver.givenName}</Text>
        <Text>{' ' + driver.familyName}</Text>
      </View>
    </Pressable>
  );
};

export default DriverItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  item: {
    marginVertical: 100,
    flexDirection: 'row',
  },
});
