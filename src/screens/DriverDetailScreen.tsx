import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { DriverStackParamList } from '../types/navigation';

type ScreenProps = NativeStackScreenProps<DriverStackParamList, 'DriverDetail'>;

const DriverDetailScreen = ({ route }: ScreenProps) => {
  const { familyName, givenName, dateOfBirth, nationality } = route.params;

  const dateParts = dateOfBirth.split('-');
  const formattedDate = new Date(
    parseInt(dateParts[0], 10),
    parseInt(dateParts[1], 10) - 1,
    parseInt(dateParts[2], 10),
  ).toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text>{givenName}</Text>
      <Text>{familyName}</Text>
      <Text>{nationality}</Text>
      <Text>{formattedDate}</Text>
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
