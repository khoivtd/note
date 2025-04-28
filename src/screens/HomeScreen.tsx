import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  Text,
  ImageBackground,
  Settings,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";

import { useNotes } from "@src/viewmodels/NoteViewModel";
import CategoryItem from "@src/components/CategoryItem";
import NoteList from "@src/components/NoteList";
import { About, AddNote, BgSummary, Setting } from "@src/assets";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { categoriesWithNotes } = useNotes();

  return (
    <ImageBackground
      source={BgSummary}
      resizeMode="cover"
      style={styles.bgSummary}
    >
      <View style={[styles.container]}>
        <StatusBar barStyle="light-content" backgroundColor="#32054D" />

        <Text style={styles.sectionTitle}>Recently created notes</Text>

        <FlashList
          data={categoriesWithNotes}
          renderItem={({ item, index }) => (
            <View key={index}>
              <CategoryItem category={item.category} />
              <NoteList
                category={item.category}
                onPress={() => navigation.navigate("Summary")}
              />
            </View>
          )}
          estimatedItemSize={100}
          keyExtractor={(item) => item.category}
        />

        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => navigation.navigate("Settings")}
        >
          <Image source={Setting} />;
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("NewNote")}>
          <Image source={AddNote} />;
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    margin: 16,
  },
  bgSummary: {
    flex: 1,
  },
  sectionTitle: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 20,
  },
  categoryTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  noteItem: {
    flexDirection: "row",
    backgroundColor: "#32054D",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  noteText: {
    color: "#fff",
    flex: 1,
    marginRight: 10,
  },
  settingsButton: {
    position: "absolute",
    top: 40,
    right: 20,
  },
});
