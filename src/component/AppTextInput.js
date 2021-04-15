import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

function AppTextInput(
  {
    styleContainer = {
      width: '23%',
      borderWidth: 1,
      borderColor: 'dodgerblue',
      borderRadius: 4,
    },
    styleTextInput,
    refs,
    forwardedRef,
    ...otherProps
  },
  ref,
) {
  return (
    <View style={[styles.textInputContainer, styleContainer]}>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 20,
  },
});
