// src/components/ButtonPrimary.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';

const ButtonPrimary = ({ title, onPress, variant = 'primary' }) => {
  const isDanger = variant === 'danger';

  return (
    <TouchableOpacity
      style={[styles.button, isDanger ? styles.danger : styles.primary]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 6,
    alignItems: 'center',
  },
  primary: {
    backgroundColor: colors.blue,
  },
  danger: {
    backgroundColor: colors.coral,
  },
  text: {
    color: colors.textLight,
    fontWeight: '600',
    fontSize: 16,
  },
});

export default ButtonPrimary;
