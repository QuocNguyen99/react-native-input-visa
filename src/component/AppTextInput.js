import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

function AppTextInput(
  {styleContainerInput, styleTextInput, refs, forwardedRef, ...otherProps},
  ref,
) {
  return (
    <View style={[styles.textInputContainer, styleContainerInput]}>
      <TextInput
        ref={ref}
        maxLength={4}
        keyboardType="numeric"
        style={[styles.textInput, styleTextInput]}
        {...otherProps}
      />
    </View>
  );
}

export default React.forwardRef(AppTextInput);

const styles = StyleSheet.create({
  textInputContainer: {
    width: '23%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'dodgerblue',
    borderRadius: 4,
  },
  textInput: {
    fontSize: 20,
  },
});
