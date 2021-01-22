import React, { useEffect, useState } from 'react';
import { FlatList, View, ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import MovieItem from '../components/MovieItem';
import { useFavourite } from '../context/FavouriteContext';

export default function Favourites() {
  const { favourites } = useFavourite();
  const favArr = favourites.map(({ id }) => id);

  return (
    <ScrollView>
      {favourites.length < 1 ? (
        <Text style={styles.title}>No favourites selected yet :(</Text>
      ) : (
        <>
          <View>
            <FlatList
              data={favourites}
              keyExtractor={({ id }) => id}
              renderItem={({ item }) => <MovieItem item={item} added={favArr.includes(item.id)} />}
            />
          </View>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#694fad',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 50
  }
});
