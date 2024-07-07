import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const recipesDetails = {
  '1': { name: 'Nasi Goreng', ingredients: 'Nasi, Bawang, Kecap, Telur', steps: '1. Panaskan minyak ...' },
  '2': { name: 'Rendang', ingredients: 'Daging, Santan, Rempah', steps: '1. Tumis bumbu ...' },
  '3': { name: 'Sate Ayam', ingredients: 'Ayam, Kacang, Kecap', steps: '1. Potong ayam ...' },
  '4': { name: 'Gado-Gado', ingredients: 'Sayuran, Kacang, Lontong', steps: '1. Rebus sayuran ...' },
};

const RecipeScreen = ({ route }) => {
  const { recipe } = route.params;
  const recipeDetail = recipesDetails[recipe.id];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipeDetail.name}</Text>
      <Text style={styles.subtitle}>Bahan-bahan:</Text>
      <Text>{recipeDetail.ingredients}</Text>
      <Text style={styles.subtitle}>Langkah-langkah:</Text>
      <Text>{recipeDetail.steps}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
  },
});

export default RecipeScreen;
