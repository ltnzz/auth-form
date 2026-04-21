import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface FormInputProps extends TextInputProps {
  label?: string;
  error?: string;
  touched?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({ label, error, touched, style, ...props }) => {
  const hasError = touched && error; 

  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>} 
      <TextInput
        style={[styles.input, hasError && styles.inputError, style]} 
        placeholderTextColor="#999"
        {...props}
      />
      {hasError && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginBottom: 16 }, 
  label: { fontSize: 14, fontWeight: '600', color: '#333', marginBottom: 6 }, 
  input: { 
    borderWidth: 1.5, 
    borderColor: '#ddd', 
    borderRadius: 10, 
    padding: 12, 
    backgroundColor: '#fafafa' 
  }, 
  inputError: { borderColor: '#E53E3E', backgroundColor: '#FFF5F5' }, 
  errorText: { color: '#E53E3E', fontSize: 12, marginTop: 5 }, 
});