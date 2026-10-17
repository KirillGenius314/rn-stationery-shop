import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Drug } from '../types/drug';
import { useCartStore } from '../stores/cartStore';

interface Props {
  drug: Drug;
  onPress: () => void;
}

export default function DrugListItem({ drug, onPress }: Props) {
  const add = useCartStore((s) => s.add);

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={2}>{drug.name} ({drug.latin_name}) </Text>
        <Text style={{color: drug.dosage ? '#008000' : '#FF0000'}}>В наличии: {drug.stock} шт</Text>
      </View>

      {/* stopPropagation: чтобы тап по кнопке не открывал экран товара */}
      <Pressable
        style={styles.addBtn}
        onPress={(e) => {
          e.stopPropagation();
          add(drug);
        }}
      >
        <Text style={styles.addBtnText}>+</Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 6,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  info: { flex: 1, marginLeft: 12 },
  name: { fontSize: 14, fontWeight: '600', marginVertical: 2 },
  addBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1e88e5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtnText: { color: '#fff', fontSize: 22, lineHeight: 24, fontWeight: '700' },
});