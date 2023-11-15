import { View, StyleSheet, Text } from 'react-native';

import type { Driver } from '../types/driver';

type Props = {
  driver: Driver;
};

const ListItem = ({ driver }: Props) => {
  return (
    <View style={styles.container}>
      <Text>{driver.givenName}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
