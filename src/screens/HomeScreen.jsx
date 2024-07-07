// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const recipes = [
  { id: '1', name: 'Nasi Goreng' },
  { id: '2', name: 'Rendang' },
  { id: '3', name: 'Sate Ayam' },
  { id: '4', name: 'Gado-Gado' },
  { id: '5', name: 'Soto Ayam' },
  { id: '6', name: 'Bakso' },
  { id: '7', name: 'Mie Goreng' },
  { id: '8', name: 'Ayam Penyet' },
  { id: '9', name: 'Pempek' },
  { id: '10', name: 'Gudeg' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resep Masakan Nusantara</Text>
      <FlatList
        data={recipes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.recipeButton}
            onPress={() => navigation.navigate('Recipe', { recipe: item })}
          >
            <Text style={styles.recipeButtonText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
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
  recipeButton: {
    padding: 15,
    backgroundColor: '#f8b400',
    borderRadius: 5,
    marginBottom: 10,
  },
  recipeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HomeScreen;
