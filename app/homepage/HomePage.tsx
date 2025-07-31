import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FilterModal } from '@/components/filter/FilterModal';
import { PetCard } from '@/components/pets/PetCard';
import { PetCategories } from '@/components/pets/PetCategories';
import { SearchBar } from '@/components/search/SearchBar';
import { FilterOptions, Pet, petService } from '@/services/petService';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { BottomNavigation } from '../navigation/BottomNavigation';

export default function HomePage() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [filteredPets, setFilteredPets] = useState<Pet[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    age: 'all',
    size: 'all',
    gender: 'all',
  });
  const [activeTab, setActiveTab] = useState<'home' | 'map' | 'chats' | 'profile'>('home');
  const [categories, setCategories] = useState<any[]>([]);

  // Load pets and categories on component mount
  useEffect(() => {
    loadPets();
    loadCategories();
  }, []);

  // Filter pets whenever search, category, or filter options change
  useEffect(() => {
    filterPets();
  }, [pets, searchQuery, selectedCategory, filterOptions]);

  const loadPets = async () => {
    try {
      const petsData = await petService.getPets();
      setPets(petsData);
    } catch (error) {
      console.error('Error loading pets:', error);
      Alert.alert('Error', 'Failed to load pets');
    }
  };

  const loadCategories = async () => {
    try {
      const categoriesData = await petService.getCategories();
      setCategories(categoriesData);
    } catch (error) {
      console.error('Error loading categories:', error);
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

    // Apply filter options
    if (filterOptions.age !== 'all') {
      filtered = filtered.filter(pet => pet.age === filterOptions.age);
    }
    if (filterOptions.size !== 'all') {
      filtered = filtered.filter(pet => pet.size === filterOptions.size);
    }
    if (filterOptions.gender !== 'all') {
      filtered = filtered.filter(pet => pet.gender === filterOptions.gender);
    }

    setFilteredPets(filtered);
  };

  const handlePetPress = (petId: string) => {
    console.log('Pet pressed:', petId);
    // Navigate to pet details screen
  };

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterPress = () => {
    setFilterModalVisible(true);
  };

  const handleFilterApply = (options: FilterOptions) => {
    setFilterOptions(options);
    setFilterModalVisible(false);
  };

  const handleFilterCancel = () => {
    setFilterModalVisible(false);
  };

  const handleTabPress = (tab: 'home' | 'map' | 'chats' | 'profile') => {
    setActiveTab(tab);
    if (tab !== 'home') {
      Alert.alert('Coming Soon', `${tab} feature will be available soon!`);
    }
  };

  const handlePlusPress = () => {
    Alert.alert('Add New', 'Add pet, shelter, or event feature coming soon!');
  };

  return (
    <ThemedView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <ThemedText style={styles.greeting}>Hello John,</ThemedText>
        <ThemedText style={styles.mainTitle}>Pets waiting for you!</ThemedText>
      </View>

      {/* Scrollable Content */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={handleSearch}
            onFilterPress={handleFilterPress}
          />
        </View>

        {/* Pet Categories */}
        <View style={styles.categoriesContainer}>
          <PetCategories
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryPress={handleCategoryPress}
          />
        </View>

        {/* Pets Grid */}
        <View style={styles.petsContainer}>
          <View style={styles.petsGrid}>
            {filteredPets.map((pet) => (
              <PetCard
                key={pet.id}
                id={pet.id}
                name={pet.name}
                breed={pet.breed}
                age={pet.age}
                location={pet.location}
                imageUrl={pet.imageUrl}
                gender={pet.gender}
                onPress={handlePetPress}
              />
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Filter Modal */}
      <FilterModal
        visible={filterModalVisible}
        onClose={handleFilterCancel}
        onApplyFilters={handleFilterApply}
      />

      {/* Bottom Navigation - Fixed Overlay */}
      <View style={styles.navigationContainer}>
        <BottomNavigation
          activeTab={activeTab}
          onTabPress={handleTabPress}
          onPlusPress={handlePlusPress}
        />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 16,
    color: '#6c757d',
    marginBottom: 4,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#212529',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 120, // Space for bottom navigation
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  categoriesContainer: {
    backgroundColor: '#fff',
    paddingBottom: 16,
  },
  petsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  petsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  navigationContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
}); 