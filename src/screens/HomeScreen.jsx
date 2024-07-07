import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const recipes = [
  { id: '1', name: 'Nasi Goreng' },
  { id: '2', name: 'Rendang' },
  { id: '3', name: 'Sate Ayam' },
  { id: '4', name: 'Gado-Gado' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resep Masakan Nusantara</Text>
      <FlatList
        data={recipes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() => navigation.navigate('Recipe', { recipe: item })}
          />
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
});

export default HomeScreen;
