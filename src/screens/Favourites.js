import React, { useEffect, useState } from 'react';
import { FlatList, View, ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import MovieItem from '../components/MovieItem';

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);

  return (
    <ScrollView>
      {favourites.length < 1 ? (
        <Text style={styles.title}>No favourites selected yet :(</Text>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={sortedMovies}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => <MovieItem item={item} />}
          />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center'
  },
  title: {
    color: '#694fad',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: "center",
    marginTop: 50
  },
});
