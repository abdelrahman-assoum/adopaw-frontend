import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onFilterPress: () => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  onFilterPress,
  placeholder = 'Search by pet name...',
}) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.searchContainer, { borderColor: colors.icon }]}>
        <IconSymbol
          name="magnifyingglass"
          size={20}
          color={colors.text}
          style={styles.searchIcon}
        />
        <TextInput
          style={[styles.input, { color: colors.text }]}
          value={searchQuery}
          onChangeText={onSearchChange}
          placeholder="Search for Pet"
          placeholderTextColor="#6c757d"
        />
      </View>
      <TouchableOpacity
        style={[styles.filterButton, { backgroundColor: colors.tint }]}
        onPress={onFilterPress}
        activeOpacity={0.7}
      >
        <IconSymbol name="slider.horizontal.3" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 12,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f8f9fa',
    borderColor: '#e9ecef',
  },
  searchIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  filterButton: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#2196F3',
  },
}); 