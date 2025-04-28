import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { Note } from "@src/models/Note";

const NoteItem = ({ noteItem }: { noteItem: Note }) => (
  <View style={styles.card}>
    <Text style={styles.noteText}>{noteItem.content.slice(0, 20)}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    padding: 16,
    marginVertical: 8,
    borderRadius: 12,
    borderColor: "rgba(255, 255, 255, 0.12)",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  noteText: {
    fontSize: 14,
    color: "#f9f9f9",
    marginBottom: 4,
  },
});

export default NoteItem;
