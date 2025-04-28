import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { settings } from "@src/constant";
import { useNotes } from "@src/viewmodels/NoteViewModel";

const SettingsScreen = () => {
  const { deleteAllNotes } = useNotes();
  const navigation = useNavigation();

  const handleDelete = () => {
    deleteAllNotes();
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {settings.map((item, index) => (
          <TouchableOpacity key={index} style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>Delete All Notes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B0030",
    padding: 20,
  },
  item: {
    backgroundColor: "#32054D",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  itemText: {
    color: "#fff",
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: "#FF5B9F",
    padding: 15,
    borderRadius: 30,
    marginTop: 30,
  },
  deleteButtonText: {
    fontFamily: "PingFang-SC-Bold",
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
