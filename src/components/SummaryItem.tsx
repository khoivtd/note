import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { CategoryType, Note } from "@src/models/Note";

const SummaryItem = ({
  summaryItem,
}: {
  summaryItem: { category: CategoryType; notes: Note[] };
}) => (
  <View style={styles.itemContainer}>
    <Text style={styles.itemTitle}>{summaryItem.category}</Text>

    <Text style={styles.itemSubtitle}>
      This topic has a total of {summaryItem.notes.length} records.
    </Text>

    <TouchableOpacity style={styles.detailButton}>
      <Text style={styles.detailButtonText}>Detail</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#32054D",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    position: "relative",
  },
  itemTitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 8,
  },
  itemSubtitle: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 10,
  },
  detailButton: {
    position: "absolute",
    right: 20,
    top: 20,
    backgroundColor: "#FF5B9F",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
  },
  detailButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SummaryItem;
