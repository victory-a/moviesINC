import React, { useEffect, useState } from 'react';
import { FlatList, View, ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import MovieItem from '../components/MovieItem';
import { useFavourite } from '../context/FavouriteContext';

export default function Favourites() {
  const { favourites } = useFavourite();

  return (
    <ScrollView>
      {favourites.length < 1 ? (
        <Text style={styles.title}>No favourites selected yet :(</Text>
      ) : (
        <>
        <View style={styles.container}>
          <FlatList
            data={favourites}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => <MovieItem item={item} />}
          />
        </View>
        </>
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
    alignSelf: 'center',
    marginTop: 50
  }
});
