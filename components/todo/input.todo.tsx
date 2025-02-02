import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

interface InputTodoProps {
  onAddTodo: (title: string) => void;
}

const InputTodo: React.FC<InputTodoProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");

  const handleAddTodo = () => {
    if (title.trim()) {
      onAddTodo(title);
      setTitle("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhap cong viec can lam..."
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Them vao" onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
});

export default InputTodo;
