import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation(); 

  const handleAddTaskPress = () => {
    setLoading(true);
    setTimeout(() => {
      setTasks([...tasks, task]);
      setTask("");
      setLoading(false);
    }, 500);
  };

  const handleDeleteTaskPress = (index) => {
    setLoading(true);

    setTimeout(() => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
      setLoading(false);
    }, 500);
  };

  const handleSettingsPress = () => {
    navigation.navigate("SettingsScreen"); // Ayarlar Ekranına Git
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="black" />
        </View>
      )}

      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.title}>Görevlerim ({tasks.length})</Text>
          <TouchableOpacity onPress={handleSettingsPress}>
            <AntDesign name="setting" size={34} color="black" />
          </TouchableOpacity>
        </View>

        <Text style={styles.subtitle}>
          Yapmayı planladığın işlerini buraya ekle ve unutma :)
        </Text>
        <TextInput
          onChangeText={(value) => setTask(value)}
          style={styles.input}
          placeholder="Metnini gir"
          value={task}
        />
        <TouchableOpacity
          onPress={handleAddTaskPress}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Görev Ekle</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <FlatList
          keyExtractor={(item) => `${item}${Date.now()}${Math.random()}`}
          data={tasks}
          renderItem={({ item, index }) => (
            <View style={styles.tasksContainer}>
              <View style={styles.tasksTextContainer}>
                <Text>{item}</Text>
                <Text>{new Date().toLocaleString()}</Text>
              </View>
              <TouchableOpacity
                onPress={() => handleDeleteTaskPress(index)}
                style={styles.taskDelete}
              >
                <Text style={styles.taskTextDelete}>X</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <View style={styles.divider} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 12,
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

export default HomeScreen;
