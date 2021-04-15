# REACT-NATIVE-INPUT-VISA

React-native-input-visa make visa entry easier

## Installation

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
npm i react-native-input-visa
```
or
```bash
yarn add react-native-input-visa
```

## Usage

```javascript
<InputVisa
        styleContainerInput={styles.inputContainer}
        styleContainer={styles.container}
        styleTextInput={styles.textInput}
        value={value}
        onChangeText={text => {
          setValue(text);
        }}
      />

  inputContainer: {
    borderBottomColor:'gray',
    borderWidth:0,
    borderBottomWidth:2
  },
  textInput:{
    color:'white'
  },
  container:{
    marginHorizontal:10,
  }
```

## Note
If you want style border, you need to set borderWidth:0 first

## License
[MIT](https://choosealicense.com/licenses/mit/)
