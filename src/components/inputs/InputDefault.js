import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {validateCard} from '../../utils/utils';
import useApp from '../../store/actions/app';
const CustomInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  keyboardType = 'default',
  type = 'text',
  secureTextEntry = false,
  style = {},
}) => {
  const {setIconCard} = useApp();
  
  const handleTextChange = text => {
    if (keyboardType === 'numeric') {
      const filteredText = text.replace(/[^0-9]/g, '');
      onChangeText(filteredText);
    } else {
      onChangeText(text);
    }
    if (type === 'card') {
      setIconCard(validateCard(text));
      onChangeText(text);
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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default CustomInput;
