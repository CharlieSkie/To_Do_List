import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TodoItem({ item, onDelete }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>{item.text}</Text>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <Text style={styles.delete}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff', padding: 12, marginBottom: 10, borderRadius: 10 },
  text: { fontSize: 16 },
  delete: { fontSize: 18 },
});
