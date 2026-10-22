import { router, useLocalSearchParams } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ReviewScreen() {
  const {userName, email, phoneNumber, age} = useLocalSearchParams();
  const handleConfirm = () => {
    // Navigate to Success screen with userName parameter
    router.push({
        pathname: '/success',
        params: {userName},
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Review Your Information</Text>
      <View style={styles.card}>
        <Text style={styles.info}>Username: {userName}</Text>
        <Text style={styles.info}>Email: {email}</Text>
        <Text style={styles.info}>Phone Number: {phoneNumber || 'N/A'}</Text>
      </View>
      <View style={styles.buttonContainer}>
      <Button title="Edit Information" color={'red'} onPress={(() => router.back())} />
        <Button title="Confirm & Submit" onPress={handleConfirm} />
        </View>
        </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    },
    card: {
        backgroundColor: '#f9f9f9',
        padding: 20,
        borderRadius: 8,
        marginBottom: 20,
    },
    info: {
        fontSize: 18,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})