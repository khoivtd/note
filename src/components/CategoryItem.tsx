import React from "react";
import { Text, View, StyleSheet } from "react-native";

const CategoryItem = ({ category }: { category: string }) => (
  <View style={styles.container}>
    <Text style={styles.categoryText}>
      {/* <Icon name="book-outline" size={20} />  */}
      {category}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  categoryText: {
    color: "#B187FF",
    fontSize: 18,
  },
});

export default CategoryItem;
