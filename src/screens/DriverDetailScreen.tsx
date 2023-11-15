import { SafeAreaView, StyleSheet, View } from 'react-native';

type Props = {};

const DriverDetailScreen = ({}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View />
    </SafeAreaView>
  );
};

export default DriverDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
