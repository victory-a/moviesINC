import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TouchableRipple, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useFavourite } from '../context/FavouriteContext';

export default function MovieItem({ item, favButton = false }) {
  const { navigate } = useNavigation();
  const { addToFavourite } = useFavourite();

  return (
    <TouchableRipple
      onPress={() => navigate('Movie Detail', { item })}
      rippleColor="rgba(0, 0, 0, .32)"
    >
      <View style={styles.container}>
        <Image
          source={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          style={{ width: 120, height: 100, marginLeft: 'auto', marginRight: 'auto' }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>Voter Average: {item.vote_average}</Text>
          <Text style={styles.text}>Release date: {item.release_date}</Text>
        </View>
        {favButton ? (
          <Button
            style={styles.button}
            icon="heart"
            mode="contained"
            uppercase={false}
            onPress={() => addToFavourite(item)}
          >
            Add to favourites
          </Button>
        ) : null}
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    backgroundColor: '#e5e5e5',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  textContainer: {
    marginVertical: 5
  },
  title: {
    color: '#694fad',
    fontSize: 15,
    fontWeight: 'bold'
  },
  text: {
    color: '#694fad',
    fontSize: 12
  },
  button: {
    width: 250,
    marginVertical: 10,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});
