import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FilterModal } from '@/components/filter/FilterModal';
import { PetCard } from '@/components/pets/PetCard';
import { PetCategories } from '@/components/pets/PetCategories';
import { SearchBar } from '@/components/search/SearchBar';
import { languageService } from '@/services/languageService';
import { Pet, PetFilters, petCategories, petService } from '@/services/petService';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState<PetFilters>({});

  useEffect(() => {
    loadPets();
  }, []);

  useEffect(() => {
    filterPets();
  }, [pets, selectedCategory, searchQuery, appliedFilters]);

  const loadPets = async () => {
    try {
      setLoading(true);
      const petsData = await petService.getPets();
      setPets(petsData);
    } catch (error) {
      console.error('Error loading pets:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterPets = () => {
    let filtered = [...pets];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(pet => pet.category === selectedCategory);
    }

    // Filter by search query (only by name)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(pet =>
        pet.name.toLowerCase().includes(query)
      );
    }

    // Apply additional filters
    if (appliedFilters.age) {
      filtered = filtered.filter(pet => {
        const age = pet.age.toLowerCase();
        return age.includes(appliedFilters.age!.toLowerCase());
      });
    }

    if (appliedFilters.size) {
      filtered = filtered.filter(pet => pet.size === appliedFilters.size);
    }

    if (appliedFilters.gender) {
      filtered = filtered.filter(pet => pet.gender === appliedFilters.gender);
    }

    setFilteredPets(filtered);
  };

  const handleCategoryPress = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterPress = () => {
    setShowFilterModal(true);
  };

  const handleApplyFilters = (filters: PetFilters) => {
    setAppliedFilters(filters);
  };

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

  const renderHeader = () => (
    <View style={styles.header}>
      <ThemedText type="title" style={styles.title}>
        {languageService.translate('home')}
      </ThemedText>
      <ThemedText style={styles.subtitle}>
        Find your perfect companion
      </ThemedText>
    </View>
  );

  if (loading) {
    return (
      <ThemedView style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
        <ThemedText style={styles.loadingText}>Loading pets...</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      {renderHeader()}
      
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onFilterPress={handleFilterPress}
        placeholder={languageService.translate('searchPets')}
      />

      <PetCategories
        categories={petCategories}
        selectedCategory={selectedCategory}
        onCategoryPress={handleCategoryPress}
      />

      <FlatList
        data={filteredPets}
        renderItem={renderPetCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <ThemedText type="subtitle" style={styles.emptyTitle}>
              No pets found
            </ThemedText>
            <ThemedText style={styles.emptyDescription}>
              Try adjusting your search or filters
            </ThemedText>
          </View>
        }
      />

      <FilterModal
        visible={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        onApplyFilters={handleApplyFilters}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  loadingText: {
    marginTop: 16,
    opacity: 0.7,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  title: {
    marginBottom: 4,
  },
  subtitle: {
    opacity: 0.7,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
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
