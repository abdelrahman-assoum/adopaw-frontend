import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Category {
  id: string;
  name: string;
  icon: string;
  emoji: string;
}

interface PetCategoriesProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryPress: (categoryId: string) => void;
}

export const PetCategories: React.FC<PetCategoriesProps> = ({
  categories,
  selectedCategory,
  onCategoryPress,
}) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories?.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              {
                backgroundColor: selectedCategory === category.id ? colors.primary : colors.background,
                borderColor: selectedCategory === category.id ? colors.primary : colors.border,
              },
            ]}
            onPress={() => onCategoryPress(category.id)}
            activeOpacity={0.7}
          >
            <Text style={styles.categoryEmoji}>{category.emoji}</Text>
            <ThemedText 
              style={[
                styles.categoryText,
                { color: selectedCategory === category.id ? colors.white : colors.text }
              ]}
            >
              {category.name}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  categoryButton: {
    width: 80,
    height: 80,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  categoryEmoji: {
    fontSize: 24,
    marginBottom: 4,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
});