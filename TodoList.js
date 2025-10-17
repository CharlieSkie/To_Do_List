 import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (text.trim().length === 0) return;
    setTodos((prev) => [...prev, { id: Date.now().toString(), text }]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 My To-Do List</Text>
      <TodoInput onAddTodo={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem item={item} onDelete={deleteTodo} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
});