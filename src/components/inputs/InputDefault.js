import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {validateCard} from '../../utils/utils';
import useApp from '../../store/actions/app';
import {colors} from '../../styles/theme';

const CustomInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  type = 'text',
  secureTextEntry = false,
  style = {},
  maxLength = 500,
}) => {
  const {setIconCard} = useApp();

  const handleTextChange = text => {
    if (type === 'dateCard') {
      let formattedText = text.replace(/\D/g, '');
      if (formattedText.length > 2) {
        formattedText =
          formattedText.slice(0, 2) + '/' + formattedText.slice(2, 4);
      }
      if (formattedText.length > 5) {
        formattedText = formattedText.slice(0, 5);
      }
      onChangeText(formattedText);
    } else if (keyboardType === 'numeric') {
      const filteredText = text.replace(/[^0-9]/g, '');
      onChangeText(filteredText);
    } else {
      onChangeText(text);
    }
    if (type === 'card') {
      setIconCard(validateCard(text));
    }
  };
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={handleTextChange}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={colors.lightGrey}
        maxLength={maxLength}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: '100%',
    backgroundColor: 'transparent',
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  input: {
    height: 40,
    color: colors.dark,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default CustomInput;
