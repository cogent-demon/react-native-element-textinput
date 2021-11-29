import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TagsInput } from 'react-native-element-textinput';

const TextInputComponent = props => {
  const [value, setValue] = useState([]);

  return (
    <TagsInput
      data={value}
      style={styles.input}
      inputStyle={styles.inputStyle}
      labelStyle={styles.labelStyle}
      placeholderStyle={styles.placeholderStyle}
      textErrorStyle={styles.textErrorStyle}
      hashtagStyle={styles.hashtagStyle}
      hashtagTextStyle={styles.hashtagTextStyle}
      label="TagsInput"
      placeholder="Tags..."
      placeholderTextColor="gray"
      onChangeValue={value => {
        setValue(value);
      }}
    />
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  input: {
    marginVertical: 16,
    marginHorizontal: 4,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  inputStyle: { fontSize: 16 },
  labelStyle: {
    fontSize: 14,
    position: 'absolute',
    top: -10,
    backgroundColor: 'white',
    paddingHorizontal: 4,
    marginLeft: -4,
  },
  placeholderStyle: { fontSize: 16 },
  textErrorStyle: { fontSize: 16 },
  hashtagStyle: {
    borderWidth: 0,
    borderRadius: 16,
    padding: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  hashtagTextStyle: {
    fontSize: 16,
  },
});
