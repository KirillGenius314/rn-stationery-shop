import { Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BackButton() {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      onPress={() => navigation.navigate('Login')}  
      style={styles.wrap}
    >
      <Text style={styles.icon}>Назад</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrap: { padding: 8 },
  icon: { fontSize: 22, color: '#008000' },
});