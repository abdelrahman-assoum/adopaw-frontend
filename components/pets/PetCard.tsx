import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

interface PetCardProps {
  name: string;
  image: string;
  gender: 'male' | 'female';
  onPress: () => void;
}

export const PetCard: React.FC<PetCardProps> = ({ name, image, gender, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <ThemedText style={styles.name}>{name}</ThemedText>
        <View style={styles.genderBadge}>
          <ThemedText style={styles.genderIcon}>
            {gender === 'female' ? '♀' : '♂'}
          </ThemedText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    borderRadius: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  info: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  genderBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  genderIcon: {
    fontSize: 16,
    color: '#666',
  },
});