import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
  },
  wrapperContainer: {
    flex: 1,
    backgroundColor: '#a4ddf9',
  },
  textSlide: {
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    fontSize: 17,
  },
  wrapperLogo: {
    flex: 4,
    alignItems: 'center',
  },
  logo: {
    marginTop: 70,
    height: 52,
    width: 170,
  },
  wrapperSwiper: {
    flex: 1,
  },
  swiper: {},
  wrapperButtons: {
    flex: 4,
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: 14,
  },
  signUpButton: {
    backgroundColor: '#1DB954',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  logInButton: {
    backgroundColor: 'white',
  },
  dot: {
    opacity: 0.6,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
