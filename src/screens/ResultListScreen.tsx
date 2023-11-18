import { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import ItemSeparator from '../components/ItemSeparator';
import ResultItem from '../components/ResultItem';
import type { DriverStackParamList } from '../types/navigation';

const ResultListScreen = () => {
  const { data, loading, error } = useTypedSelector(state => state.result);
  const { fetchResults } = useActions();

  const navigation =
    useNavigation<NativeStackNavigationProp<DriverStackParamList>>();

  const results = data?.MRData.RaceTable.Races[0].Results;
  const race = data?.MRData.RaceTable.Races[0];

  useEffect(() => {
    fetchResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    navigation.setOptions({ headerTitle: race?.raceName });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [race]);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? <ActivityIndicator size="large" /> : null}
      {error ? <Text>{error}</Text> : null}
      {results?.length ? (
        <FlatList
          style={{ width: '100%' }}
          data={results}
          renderItem={({ item }) => <ResultItem result={item} />}
          ItemSeparatorComponent={ItemSeparator}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default ResultListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
