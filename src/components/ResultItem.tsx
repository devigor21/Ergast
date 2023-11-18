import { View, StyleSheet, Text } from 'react-native';

import type { Result } from '../types/result';

type Props = {
  result: Result;
};

const ResultItem = ({ result }: Props) => {
  const {
    position,
    number,
    Driver,
    Constructor,
    laps,
    grid,
    Time,
    status,
    points,
  } = result;

  return (
    <View style={styles.item}>
      <Text>{position}</Text>
      <Text>{' ' + number}</Text>
      <Text>{' ' + Driver.givenName}</Text>
      <Text>{' ' + Driver.familyName}</Text>
      <Text>{' ' + Constructor.name}</Text>
      <Text>{' ' + laps}</Text>
      <Text>{' ' + grid}</Text>
      <Text>{' ' + Time ? Time?.time : ''}</Text>
      <Text>{' ' + status}</Text>
      <Text>{' ' + points}</Text>
    </View>
  );
};

export default ResultItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  item: {
    marginVertical: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
});
