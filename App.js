import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  FlatList,
} from "react-native";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleAddTaskPress = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  const handleDeleteTaskPress = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>My Task({task})</Text>
        <Text style={styles.subtitle}>Enter your text</Text>
        <TextInput
          onChangeText={(value) => setTask(value)}
          style={styles.input}
          placeholder="Enter your text"
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text onPress={handleAddTaskPress} style={styles.buttonText}>
            Add Task
          </Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <FlatList
          keyExtractor={(item) => item + Date.now() + Math.random()}
          data={tasks}
          renderItem={({ item, index }) => (
            <View style={styles.tasksContainer}>
              <View style={styles.tasksTextContainer}>
                <Text>{item}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  handleDeleteTaskPress(index);
                }}
                style={styles.taskDelete}
              >
                <Text style={styles.taskTextDelete}>X</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },

  title: {
    fontSize: 30,
    color: "black",
  },
  subtitle: {
    fontSize: 14,
    color: "black",
  },
  input: {
    borderWidth: 1,
    borderColor: "#dddd",
    padding: 16,
    borderRadius: 4,
    fontSize: 18,
    marginTop: 32,
  },
  buttonContainer: {
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 12,
    alignSelf: "flex-end",
  },
  buttonText: {
    color: "black",
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 32,
  },
  tasksContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  tasksTextContainer: {},
  taskDelete: {
    backgroundColor: "lightgreen",
    width: 23,
    height: 23,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  taskTextDelete: {},
});

export default App;
