import React from "react";
import { View, StyleSheet, StatusBar, ImageBackground } from "react-native";
import { FlashList } from "@shopify/flash-list";

import { useNotes } from "@src/viewmodels/NoteViewModel";
import { BgSummary } from "@src/assets";
import SummaryItem from "@src/components/SummaryItem";

const SummaryScreen = () => {
  const { categoriesWithNotes } = useNotes();

  return (
    <ImageBackground
      source={BgSummary}
      resizeMode="cover"
      style={styles.bgSummary}
    >
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#1B284F" />

        <FlashList
          data={categoriesWithNotes}
          keyExtractor={(item) => item.category}
          renderItem={({ item }) => <SummaryItem summaryItem={item} />}
          estimatedItemSize={100}
        />
      </View>
    </ImageBackground>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  bgSummary: {
    flex: 1,
  },
});
