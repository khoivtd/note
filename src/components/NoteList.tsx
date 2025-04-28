import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FlashList } from "@shopify/flash-list";

import { useNotes } from "@src/viewmodels/NoteViewModel";
import NoteItem from "./NoteItem";

interface Props {
  category: string;
  onPress: () => void;
}

const NoteList: React.FC<Props> = ({ category, onPress }) => {
  const { categoriesWithNotes } = useNotes();

  return (
    <TouchableOpacity onPress={onPress}>
      <FlashList
        data={categoriesWithNotes
          .find((item) => item.category === category)
          ?.notes.slice(0, 3)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NoteItem noteItem={item} />}
        estimatedItemSize={20}
      />
    </TouchableOpacity>
  );
};

export default NoteList;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
