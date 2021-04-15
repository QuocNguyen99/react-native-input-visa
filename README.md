# REACT-NATIVE-INPUT-VISA

React-native-input-visa make visa entry easier

## Installation

```bash
npm i react-native-input-visa
```
or
```bash
yarn add react-native-input-visa
```

## Usage

```javascript
const [value, setValue] = useState({});

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
    color:'black'
  },
  container:{
    marginHorizontal:10,
  }
```

## Note
Value return :
        {
        0:"",
        1:"",
        2:"",
        3:"",
        }
 (key is index input)
 
If you want style border, you need to set borderWidth:0 first

## License
[MIT](https://choosealicense.com/licenses/mit/)
