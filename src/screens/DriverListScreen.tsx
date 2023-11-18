import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import ItemSeparator from '../components/ItemSeparator';
import DriverItem from '../components/DriverItem';
import type { Driver } from '../types/driver';
import type { DriverStackParamList } from '../types/navigation';

const DriverListScreen = () => {
  const { data, loading, error } = useTypedSelector(state => state.driver);
  const { fetchDrivers } = useActions();

  const [offset, setOffset] = useState(0);
  const [driverList, setDriverList] = useState<Driver[]>([]);

  const navigation =
    useNavigation<NativeStackNavigationProp<DriverStackParamList>>();

  const list = data?.MRData.DriverTable.Drivers;
  const total = Number(data?.MRData.total);
  const limit = 5;

  const nextOffset = () => {
    if (offset <= total - limit) {
      setOffset(offset + limit);
    }
  };

  useEffect(() => {
    if (list?.length) {
      setDriverList([...driverList, ...list]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  useEffect(() => {
    fetchDrivers(offset);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('ResultList')}>
        <Text>Таблица заездов</Text>
      </Pressable>
      {loading && !driverList?.length ? (
        <ActivityIndicator size="large" />
      ) : null}
      {error ? <Text>{error}</Text> : null}
      {driverList?.length ? (
        <FlatList
          style={{ width: '100%' }}
          data={driverList}
          renderItem={({ item }) => <DriverItem driver={item} />}
          ListFooterComponent={
            loading && driverList?.length ? <ActivityIndicator /> : null
          }
          onEndReached={nextOffset}
          ItemSeparatorComponent={ItemSeparator}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default DriverListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#CECECE',
  },
});
