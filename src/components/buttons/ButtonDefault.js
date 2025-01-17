import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {colors, sizes} from '../../styles/theme';

const CustomButton = ({
  title,
  onPress,
  style = {},
  textStyle = {},
  isLoading = false,
  disabled = false,
  variant = 'primary', // Variantes como 'primary', 'secondary', etc.
}) => {
  // Colores según la variante
  const getButtonStyle = () => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: colors.dark,
          borderColor: colors.dark,
        };
      case 'success':
        return {
          backgroundColor: '#28a745',
          borderColor: '#28a745',
        };
      default: // Primary
        return {
          backgroundColor: colors.primary,
          borderColor: colors.primary
        };
    }
  };

  const buttonStyles = [
    styles.button,
    getButtonStyle(),
    disabled && styles.disabled,
    style,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || isLoading}>
      {isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={[styles.text, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 35,
    maxWidth: 300,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    paddingHorizontal: 15
  },
  text: {
    color: '#fff',
    fontSize: sizes.small,
  },
  disabled: {
    backgroundColor: '#ccc',
    borderColor: '#ccc',
  },
});

export default CustomButton;
