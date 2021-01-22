import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { getCredits } from '../../lib/api';
import Stars from '../../components/Stars';

export default function MovieDetail({ route, navigation }) {
  const [isLoading, setLoading] = useState(true);
  const { item } = route.params;
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (item.id) {
      fetchCast(item.id);
    }

    async function fetchCast(id) {
      const cast = await getCredits(id);
      setCast(cast);
      setLoading(false);
    }
  }, [item.id]);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        style={{ width: 250, height: 300, marginLeft: 'auto', marginRight: 'auto' }}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.overview}</Text>
      <Text style={styles.text}>Voter Average: {item.vote_average}</Text>
      <Text style={styles.text}>Release date: {item.release_date}</Text>
      {isLoading > 0 ? (
        <Text>loading cast</Text>
      ) : (
        <>
          <Text style={styles.cast}>Cast</Text>

          <FlatList
            data={cast}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => (
              <Text style={styles.text}>
                {item.original_name} as {item.name}
              </Text>
            )}
          />
        </>
      )}

      <Stars movieId={item.id}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 30
  },
  textContainer: {
    marginVertical: 5
  },
  title: {
    color: '#694fad',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  },
  text: {
    textAlign: 'center',
    color: '#694fad',
    fontSize: 16,
    marginBottom: 5
  },
  cast: {
    marginVertical: 10,
    color: '#694fad',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
