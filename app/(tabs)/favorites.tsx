import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { PetCard } from '@/components/pets/PetCard';
import { languageService } from '@/services/languageService';
import { Pet, petService } from '@/services/petService';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

export default function FavoritesScreen() {
  const [favorites, setFavorites] = React.useState<Pet[]>([]);

  React.useEffect(() => {
    // In a real app, you would fetch favorites from local storage or API
    // For now, we'll show some mock favorites
    const loadFavorites = async () => {
      try {
        const allPets = await petService.getPets();
        // Simulate some favorites (first 2 pets)
        setFavorites(allPets.slice(0, 2));
      } catch (error) {
        console.error('Error loading favorites:', error);
      }
    };

    loadFavorites();
  }, []);

  const handlePetPress = (id: string) => {
    // Navigate to pet details
    console.log('Navigate to pet:', id);
  };

  const renderPetCard = ({ item }: { item: Pet }) => (
    <PetCard
      id={item.id}
      name={item.name}
      breed={item.breed}
      age={item.age}
      location={item.location}
      imageUrl={item.imageUrl}
      gender={item.gender}
      onPress={handlePetPress}
    />
  );

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText type="title">{languageService.translate('favorites')}</ThemedText>
      </View>
      
      {favorites.length === 0 ? (
        <View style={styles.emptyState}>
          <ThemedText type="subtitle" style={styles.emptyTitle}>
            No favorites yet
          </ThemedText>
          <ThemedText style={styles.emptyDescription}>
            Start exploring pets and add them to your favorites!
          </ThemedText>
        </View>
      ) : (
        <FlatList
          data={favorites}
          renderItem={renderPetCard}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyTitle: {
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyDescription: {
    textAlign: 'center',
    opacity: 0.7,
  },
}); 