import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Todo } from "../type/model";

interface ListTodoProps {
  todos: Todo[];
}

const ListTodo: React.FC<ListTodoProps> = ({ todos }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.todo}>{item.id} - {item.title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  todo: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 5,
  },
});

export default ListTodo;
