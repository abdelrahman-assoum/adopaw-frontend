import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React, { useState } from 'react';
import {
    Modal,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';

interface FilterOption {
  id: string;
  label: string;
  value: string;
}

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
  onApplyFilters: (filters: any) => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({
  visible,
  onClose,
  onApplyFilters,
}) => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const [selectedAge, setSelectedAge] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedGender, setSelectedGender] = useState<string>('');

  const ageOptions: FilterOption[] = [
    { id: '1', label: 'Puppy (0-1 year)', value: 'puppy' },
    { id: '2', label: 'Young (1-3 years)', value: 'young' },
    { id: '3', label: 'Adult (3-7 years)', value: 'adult' },
    { id: '4', label: 'Senior (7+ years)', value: 'senior' },
  ];

  const sizeOptions: FilterOption[] = [
    { id: '1', label: 'Small', value: 'small' },
    { id: '2', label: 'Medium', value: 'medium' },
    { id: '3', label: 'Large', value: 'large' },
  ];

  const genderOptions: FilterOption[] = [
    { id: '1', label: 'Male', value: 'male' },
    { id: '2', label: 'Female', value: 'female' },
  ];

  const handleApply = () => {
    const filters = {
      age: selectedAge,
      size: selectedSize,
      gender: selectedGender,
    };
    onApplyFilters(filters);
    onClose();
  };

  const renderFilterSection = (
    title: string,
    options: FilterOption[],
    selectedValue: string,
    onSelect: (value: string) => void
  ) => (
    <View style={styles.section}>
      <ThemedText type="subtitle" style={styles.sectionTitle}>
        {title}
      </ThemedText>
      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionButton,
              {
                backgroundColor:
                  selectedValue === option.value ? colors.tint : colors.background,
                borderColor: colors.tint,
              },
            ]}
            onPress={() => onSelect(option.value)}
            activeOpacity={0.7}
          >
            <ThemedText
              style={[
                styles.optionText,
                {
                  color: selectedValue === option.value ? '#fff' : colors.text,
                },
              ]}
            >
              {option.label}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <ThemedView style={styles.modalContent}>
              <View style={styles.header}>
                <ThemedText type="title">Filters</ThemedText>
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                  <IconSymbol name="xmark" size={24} color={colors.text} />
                </TouchableOpacity>
              </View>

              <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                {renderFilterSection('Age', ageOptions, selectedAge, setSelectedAge)}
                {renderFilterSection('Size', sizeOptions, selectedSize, setSelectedSize)}
                {renderFilterSection('Gender', genderOptions, selectedGender, setSelectedGender)}
              </ScrollView>

              <View style={styles.footer}>
                <TouchableOpacity
                  style={[styles.resetButton, { borderColor: colors.tint }]}
                  onPress={() => {
                    setSelectedAge('');
                    setSelectedSize('');
                    setSelectedGender('');
                  }}
                >
                  <ThemedText style={[styles.resetButtonText, { color: colors.tint }]}>
                    Reset
                  </ThemedText>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.applyButton, { backgroundColor: colors.tint }]}
                  onPress={handleApply}
                >
                  <ThemedText style={styles.applyButtonText}>Apply Filters</ThemedText>
                </TouchableOpacity>
              </View>
            </ThemedView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '80%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  closeButton: {
    padding: 4,
  },
  content: {
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 12,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  optionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
  },
  optionText: {
    fontSize: 14,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  resetButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  applyButton: {
    flex: 2,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  applyButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
}); 