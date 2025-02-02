import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import InputTodo from "./components/todo/input.todo";
import ListTodo from "./components/todo/list.todo";
import { Todo } from "./components/type/model";

let counter = 1; // tao bien cho id

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (title: string) => {
    const newTodo: Todo = {
      id: counter++, // id tu tang dan
      title,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <View style={styles.container}>
      <InputTodo onAddTodo={handleAddTodo} />
      <ListTodo todos={todos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
});
