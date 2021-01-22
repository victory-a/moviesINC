import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableRipple } from 'react-native-paper';
import { rateMovie } from '../lib/api';

export default function Stars({ movieId }) {
  return (
    <View style={styles.container}>
      <TouchableRipple
        onPress={() => rateMovie(movieId, '1')}
        rippleColor="rgba(105, 79, 173, .32)"
      >
        <AntDesign name="star" size={40} color="#694fad" />
      </TouchableRipple>
      <TouchableRipple
        onPress={() => rateMovie(movieId, '2')}
        rippleColor="rgba(105, 79, 173, .32)"
      >
        <AntDesign name="star" size={40} color="#694fad" />
      </TouchableRipple>
      <TouchableRipple
        onPress={() => rateMovie(movieId, '3')}
        rippleColor="rgba(105, 79, 173, .32)"
      >
        <AntDesign name="star" size={40} color="#694fad" />
      </TouchableRipple>
      <TouchableRipple
        onPress={() => rateMovie(movieId, '4')}
        rippleColor="rgba(105, 79, 173, .32)"
      >
        <AntDesign name="star" size={40} color="#694fad" />
      </TouchableRipple>
      <TouchableRipple
        onPress={() => rateMovie(movieId, '5')}
        rippleColor="rgba(105, 79, 173, .32)"
      >
        <AntDesign name="star" size={40} color="#694fad" />
      </TouchableRipple>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '70%'
  }
});
