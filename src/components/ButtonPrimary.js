import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../theme/colors';

const ButtonPrimary = ({ 
  title, 
  onPress, 
  variant = 'primary',
  disabled = false,
  loading = false,
  style
}) => {
  const isDanger = variant === 'danger';

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isDanger ? styles.danger : styles.primary,
        disabled && styles.disabled,
        loading && styles.loading,
        style
      ]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={colors.textLight} />
      ) : (
        <Text style={[styles.text, disabled && styles.disabledText]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

ButtonPrimary.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['primary', 'danger']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  style: PropTypes.object
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  primary: {
    backgroundColor: colors.blue,
  },
  danger: {
    backgroundColor: colors.coral,
  },
  disabled: {
    opacity: 0.6,
  },
  loading: {
    opacity: 0.8,
  },
  text: {
    color: colors.textLight,
    fontWeight: '600',
    fontSize: 16,
  },
  disabledText: {
    opacity: 0.8,
  },
});

export default ButtonPrimary;
