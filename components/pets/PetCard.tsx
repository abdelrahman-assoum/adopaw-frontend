import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface PetCardProps {
  id: string;
  name: string;
  breed: string;
  age: string;
  location: string;
  imageUrl: string;
  gender: 'male' | 'female';
  onPress: (id: string) => void;
}

export const PetCard: React.FC<PetCardProps> = ({
  id,
  name,
  breed,
  age,
  location,
  imageUrl,
  gender,
  onPress,
}) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const getGenderSymbol = () => {
    return gender === 'male' ? '♂' : '♀';
  };

  const getGenderColor = () => {
    return gender === 'male' ? '#4FC3F7' : '#F06292';
  };

  return (
    <TouchableOpacity
      style={[styles.container, { borderColor: '#2196F3' }]}
      onPress={() => onPress(id)}
      activeOpacity={0.8}
    >
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        contentFit="cover"
        placeholder="https://via.placeholder.com/150x150"
      />
      <View style={styles.content}>
        <View style={styles.nameRow}>
          <ThemedText type="defaultSemiBold" style={styles.name}>
            {name}
          </ThemedText>
          <View style={[styles.genderBadge, { backgroundColor: getGenderColor() }]}>
            <ThemedText style={styles.genderSymbol}>{getGenderSymbol()}</ThemedText>
          </View>
        </View>
        <View style={styles.tagsContainer}>
          <View style={[styles.tag, { backgroundColor: '#4FC3F7' }]}>
            <ThemedText style={styles.tagText}>{age}</ThemedText>
          </View>
          <View style={[styles.tag, { backgroundColor: '#F06292' }]}>
            <ThemedText style={styles.tagText}>{breed}</ThemedText>
          </View>
          <View style={[styles.tag, { backgroundColor: '#9E9E9E' }]}>
            <ThemedText style={styles.tagText}>{location}</ThemedText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 2,
    borderStyle: 'dotted',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 16,
    backgroundColor: '#fff',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  genderBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderSymbol: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  tagsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
}); 