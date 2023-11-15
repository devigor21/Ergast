import { useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import ListItem from '../components/ListItem';

const DriverListScreen = () => {
  const { data, loading, error } = useTypedSelector(state => state.driver);
  const { fetchDrivers } = useActions();

  const driverList = data?.MRData.DriverTable.Drivers;

  useEffect(() => {
    fetchDrivers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={driverList}
        renderItem={({ item }) => <ListItem driver={item} />}
      />
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
});
