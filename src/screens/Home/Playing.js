import React, { useEffect, useState } from 'react';
import { FlatList, View, ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { getCurrentMovies } from '../../lib/api';
import MovieItem from '../../components/MovieItem';

export default function Playing() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  
  useEffect(() => {
    fetchMovies();

    async function fetchMovies() {
      const movies = await getCurrentMovies();
      setData(movies.results);
      console.log(movies.results[0]);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (data.length > 1) {
      const sort = data.sort((a, b) => {
        let x = a.title.toLowerCase();
        let y = b.title.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });

      setSortedMovies(sort);
    }
  }, [data]);

  return (
    <ScrollView>
      {isLoading ? (
        <Text>Loading...</Text>
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
  }
});
