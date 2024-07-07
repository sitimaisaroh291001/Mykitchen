// src/screens/RecipeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const recipesDetails = {
  '1': { name: 'Nasi Goreng', ingredients: 'Nasi, Bawang, Kecap, Telur', steps: '1. Panaskan minyak ...' },
  '2': { name: 'Rendang', ingredients: 'Daging, Santan, Rempah', steps: '1. Tumis bumbu ...' },
  '3': { name: 'Sate Ayam', ingredients: 'Ayam, Kacang, Kecap', steps: '1. Potong ayam ...' },
  '4': { name: 'Gado-Gado', ingredients: 'Sayuran, Kacang, Lontong', steps: '1. Rebus sayuran ...' },
  '5': { name: 'Soto Ayam', ingredients: 'Ayam, Bawang, Kunyit', steps: '1. Rebus ayam ...' },
  '6': { name: 'Bakso', ingredients: 'Daging, Tepung Tapioka, Bawang', steps: '1. Campur daging ...' },
  '7': { name: 'Mie Goreng', ingredients: 'Mie, Bawang, Kecap, Telur', steps: '1. Rebus mie ...' },
  '8': { name: 'Ayam Penyet', ingredients: 'Ayam, Bumbu, Sambal', steps: '1. Goreng ayam ...' },
  '9': { name: 'Pempek', ingredients: 'Ikan, Tepung Sagu, Bumbu', steps: '1. Campur ikan ...' },
  '10': { name: 'Gudeg', ingredients: 'Nangka, Santan, Rempah', steps: '1. Rebus nangka ...' },
};

const RecipeScreen = ({ route }) => {
  const { recipe } = route.params;
  const recipeDetail = recipesDetails[recipe.id];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{recipeDetail.name}</Text>
      <Text style={styles.subtitle}>Bahan-bahan:</Text>
      <Text>{recipeDetail.ingredients}</Text>
      <Text style={styles.subtitle}>Langkah-langkah:</Text>
      <Text>{recipeDetail.steps}</Text>
    </ScrollView>
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
