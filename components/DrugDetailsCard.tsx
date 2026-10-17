import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Drug } from '../types/drug';

export default function DrugDetailsCard({ drug }: { drug: Drug }) {
  return (
    <ScrollView contentContainerStyle={styles.wrap}>
      <Text style={styles.name}>{drug.name}</Text>
      <Text style={{ color: drug.stock ? '#008000' : '#FF0000', marginBottom: 4 }}>В наличии: {drug.stock} шт.</Text>
      <Text style={{marginBottom: 4}}>Необходимость рецепта: {drug.prescription_required ? "Да" : "Нет"}</Text>
      <Text style={{marginBottom: 4}}>Категория: {drug.category}</Text>
      <Text style={{marginBottom: 4}}>Описание: {drug.description}</Text>
      <Text style={{marginBottom: 4}}>Дозировка: {drug.dosage} </Text>
      <Text>Производитель: {drug.manufacturer}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrap: { padding: 20, paddingBottom: 40 },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 16,
    backgroundColor: '#f2f2f2',
    marginBottom: 16,
  },
  name: { fontSize: 22, fontWeight: '700', marginVertical: 6, marginBottom: 4 },
});