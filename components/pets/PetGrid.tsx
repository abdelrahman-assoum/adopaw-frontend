import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { PetCard } from './PetCard';

interface Pet {
  id: string;
  name: string;
  image: string;
  gender: 'male' | 'female';
}

interface PetGridProps {
  pets: Pet[];
  onPetPress: (pet: Pet) => void;
}

export const PetGrid: React.FC<PetGridProps> = ({ pets, onPetPress }) => {
  const renderItem = ({ item }: { item: Pet }) => (
    <PetCard
      name={item.name}
      image={item.image}
      gender={item.gender}
      onPress={() => onPetPress(item)}
    />
  );

  return (
    <FlatList
      data={pets}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
});