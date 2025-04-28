import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

import { useNotes } from "@src/viewmodels/NoteViewModel";
import { CategoryType } from "@src/models/Note";

const NewNoteScreen = () => {
  const navigation = useNavigation();
  const { addNote, categoriesWithNotes } = useNotes();
  const [content, setContent] = useState("");

  const categories: CategoryType[] = [
    "Work and Study",
    "Home Life",
    "Health and Well-being",
  ];
  const [category, setCategory] = useState(categories[0]);

  const handleSave = () => {
    if (content.length > 200) {
      Alert.alert("Content too long", "Max 200 characters");
      return;
    }

    if (content.length === 0) {
      Alert.alert("Content too short", "Please input note content");
      return;
    }

    addNote(category, content);

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Picker
          style={styles.input}
          placeholder="Choose a category"
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue)}
        >
          {categoriesWithNotes.map((category) => (
            <Picker.Item
              label={category.category}
              value={category.category}
              key={category.category}
            />
          ))}
        </Picker>

        <TextInput
          style={[styles.input, { height: 200 }]}
          placeholder="Please input note content"
          placeholderTextColor="#aaa"
          multiline
          maxLength={200}
          value={content}
          onChangeText={setContent}
        />
      </ScrollView>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewNoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B0030",
    padding: 20,
  },
  input: {
    backgroundColor: "#32054D",
    color: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#FF5B9F",
    padding: 15,
    borderRadius: 30,
  },
  saveButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
