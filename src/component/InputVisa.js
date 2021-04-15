import React, {createRef, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AppTextInput from './AppTextInput';
export default function InputVisa({
  value,
  getValue,
  styleContainer,
  styleTextInput,
}) {
  const array = Array(4).fill(0);
  const [listRef, setListRef] = useState([]);
  //const [valueComponent, setValueComponent] = useState({});

  useEffect(() => {
    setListRef(ref =>
      Array(4)
        .fill()
        .map((e, i) => ref[i] || createRef()),
    );
  }, []);

  const focusPrevious = (key, index) => {
    console.log('INDEX', index);
    if (key === 'Backspace' && value[index].length == 0 && index !== 0) {
      getValue({
        ...value,
        [index - 1]: value[index - 1].slice(0, value[index - 1].length - 1),
      });
      return listRef[index - 1].current.focus();
    }

    getValue({
      ...value,
      [index]: value[index].slice(0, value[index].length - 1),
    });
  };

  const focusNext = (text, index) => {
    if (text?.length == 4 && index < 3) {
      listRef[index + 1].current.focus();
      if (value[index + 1]?.length == 4 && index + 1 < 3) {
        console.log('XYZ');
        focusNext(value[index + 1], index + 1);
      }
    }
    getValue({...value, [index]: text});
  };
  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginHorizontal: 20,
      }}>
      {array.map((e, index) => (
        <AppTextInput
          value={value[index]}
          ref={listRef[index]}
          key={index.toString()}
          placeholder="0000"
          onKeyPress={e => focusPrevious(e.nativeEvent.key, index)}
          onChangeText={text => focusNext(text, index)}
          widthLimitNumber={'23%'}
          styleTextInput={styleTextInput}
          styleContainer={styleContainer}
        />
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
