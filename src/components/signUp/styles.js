import { StyleSheet } from 'react-native';
import { Header } from 'react-navigation';

export default StyleSheet.create({
  wrapperContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: Header.HEIGHT,
  },
  title: {
    alignItems: 'stretch',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  fieldset: {
    paddingTop: 30,
  },
  fieldsetTitle: {
    alignItems: 'stretch',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom: 8,
  },
  fieldsetInput: {
    alignItems: 'stretch',
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 5,
    paddingLeft: 15,
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  fieldsetWarn: {
    color: 'white',
    fontSize: 11,
    paddingTop: 5,
    fontWeight: '500',
  },
  wrapperButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 40,
    backgroundColor: 'white',
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonDisabled: {
    marginTop: 40,
    backgroundColor: 'rgb(255,255,255)',
    opacity: 0.4,
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: 14,
  },
});
