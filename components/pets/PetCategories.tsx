import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

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
      <ThemedText type="subtitle" style={styles.title}>Animal</ThemedText>
      <View style={styles.grid}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryButton,
              {
                backgroundColor: selectedCategory === category.id ? colors.tint : '#fff',
                borderColor: selectedCategory === category.id ? colors.tint : colors.icon,
              },
            ]}
            onPress={() => onCategoryPress(category.id)}
            activeOpacity={0.7}
          >
            <ThemedText style={styles.categoryEmoji}>{category.emoji}</ThemedText>
            <ThemedText
              style={[
                styles.categoryText,
                {
                  color: selectedCategory === category.id ? '#fff' : colors.text,
                },
              ]}
            >
              {category.name}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    marginBottom: 16,
    fontSize: 18,
    fontWeight: '600',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  categoryButton: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  categoryEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
}); 