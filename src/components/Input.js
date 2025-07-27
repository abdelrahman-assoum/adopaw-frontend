import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../theme/colors';

const Input = ({ 
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  error,
  errorText,
  keyboardType = 'default',
  accessibilityLabel,
  autoCapitalize = 'none',
  maxLength,
  style,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          error && styles.inputError,
          style
        ]}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        maxLength={maxLength}
        accessibilityLabel={accessibilityLabel || placeholder}
        accessible={true}
      />
      {error && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  secureTextEntry: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  keyboardType: PropTypes.string,
  accessibilityLabel: PropTypes.string,
  autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
  maxLength: PropTypes.number,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  input: {
    backgroundColor: colors.inputBg,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: colors.textDark,
    minHeight: 48,
  },
  inputError: {
    borderColor: colors.error,
    borderWidth: 1,
  },
  errorText: {
    color: colors.error,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});

export default Input;
