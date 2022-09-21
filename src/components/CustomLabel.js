import React from 'react';
import {Text, StyleSheet} from 'react-native';
const CustomLabel = props => {
  return <Text style={styles.textStyle}>{props.text}</Text>;
};
const styles = StyleSheet.create({
  textStyle: {
    // backgroundColor: '#D0BB53',
    color: '#100309',
    alignItems: 'center',
    marginVertical: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default CustomLabel;
