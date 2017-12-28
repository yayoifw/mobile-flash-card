import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
  formLabel: {
    fontSize: 36,
    margin: 12,
    textAlign: 'center'
  },
  formInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    margin: 12,
    padding: 8,
  },
  submitButton: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight:12,
    borderWidth: 1,
    borderRadius: 8,
    width: '50%',
    alignSelf: 'center',
    backgroundColor: 'black'
  },
  submitButtonTitle: {
    fontSize: 32,
    color: 'white',
    textAlign:'center',
  }
})
