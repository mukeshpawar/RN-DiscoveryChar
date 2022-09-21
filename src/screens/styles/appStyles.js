import {StyleSheet, StatusBar,Dimensions} from 'react-native';

const screen = Dimensions.get("screen");

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    // padding: 20,
    // marginVertical: 8,
    // marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  tinyLogo: {
    width: 300, // '100%',
    height: 200,
    marginVertical: 10,
    resizeMode: 'cover',
  },
  detailLogo: {
    width: screen.width * 0.95, // '100%',
    height: 300,
    resizeMode: 'cover',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginVertical:10,
  },

  itemStyle: {
    backgroundColor: '#D0BB53',
    alignItems: 'center',
    marginVertical: 10,
    fontSize: 20,
  },
  itemContainer: {
    width: '100%',
    backgroundColor: '#7F0A5E',
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textInputStyle: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    color: 'white',
  },
  labelStyle: {
    color: '#DC0F31',
    alignItems: 'center',
    marginVertical: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default appStyles;
