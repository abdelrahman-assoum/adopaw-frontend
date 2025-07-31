import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { languageService } from '@/services/languageService';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function ExploreScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const exploreItems = [
    {
      id: '1',
      title: 'Adoption Guide',
      description: 'Learn about the pet adoption process',
      icon: 'info.circle',
      color: '#4CAF50',
    },
    {
      id: '2',
      title: 'Pet Care Tips',
      description: 'Essential tips for new pet owners',
      icon: 'heart.fill',
      color: '#FF9800',
    },
    {
      id: '3',
      title: 'Local Shelters',
      description: 'Find shelters and rescue organizations',
      icon: 'location.fill',
      color: '#2196F3',
    },
    {
      id: '4',
      title: 'Success Stories',
      description: 'Read heartwarming adoption stories',
      icon: 'star.fill',
      color: '#9C27B0',
    },
    {
      id: '5',
      title: 'Pet Training',
      description: 'Training resources for your new pet',
      icon: 'graduationcap.fill',
      color: '#607D8B',
    },
    {
      id: '6',
      title: 'Veterinary Care',
      description: 'Find vets and health information',
      icon: 'cross.fill',
      color: '#F44336',
    },
  ];

  const handleItemPress = (itemId: string) => {
    console.log('Navigate to:', itemId);
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.header}>
        <ThemedText type="title">{languageService.translate('explore')}</ThemedText>
        <ThemedText style={styles.subtitle}>
          Discover resources and information about pet adoption
        </ThemedText>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {exploreItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.card, { backgroundColor: colors.background }]}
              onPress={() => handleItemPress(item.id)}
              activeOpacity={0.7}
            >
              <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
                <IconSymbol name={item.icon as any} size={24} color="#fff" />
              </View>
              <ThemedText type="subtitle" style={styles.cardTitle}>
                {item.title}
              </ThemedText>
              <ThemedText style={styles.cardDescription}>
                {item.description}
              </ThemedText>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.infoSection}>
          <ThemedText type="subtitle" style={styles.infoTitle}>
            Why Adopt?
          </ThemedText>
          <ThemedText style={styles.infoText}>
            Adopting a pet saves lives and brings joy to your home. Every adoption helps reduce the number of animals in shelters and gives a loving home to pets in need.
          </ThemedText>
        </View>
      </ScrollView>
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
  subtitle: {
    opacity: 0.7,
    marginTop: 4,
  },
  content: {
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 12,
  },
  card: {
    width: '47%',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 12,
    opacity: 0.7,
    lineHeight: 16,
  },
  infoSection: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    marginTop: 20,
  },
  infoTitle: {
    marginBottom: 12,
  },
  infoText: {
    lineHeight: 20,
    opacity: 0.8,
  },
}); 