import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function SettingsScreen() {
  const navigation = useNavigation();
  const handleBackHome = () => {
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleBackHome}>
          <AntDesign name="arrowleft" size={34} color="black" />
        </TouchableOpacity>
        <View style={styles.header}>
          <AntDesign name="profile" size={36} color="white" />
          <Text style={styles.headerTitle}>Profil</Text>
          <Text style={styles.headerSubtitle}>Kullanıcı Adı</Text>
          <Text style={styles.headerSubtitle}>E-mail</Text>
        </View>
        <View style={styles.containerImg}>
          <Image
            style={styles.image}
            source={require("../../assets/womenexp.jpg")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "lightgreen",
  },
  container: {
    flex: 1,
    margin: 16,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 30,
    color: "black",
    marginTop: 8,
  },
  headerSubtitle: {
    fontSize: 18,
    color: "gray",
    marginTop: 12,
  },
  containerImg: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 70,
  },
});

export default SettingsScreen;
