import React from 'react';
import { View, Text } from 'react-native';

const favouriteContext = React.createContext();

function FavouriteProvider(props) {
  const { Provider } = favouriteContext;
  const [favourites, setFavourite] = React.useState([]);

  function addToFavourite(movie) {
    setFavourite(favourites => {
      const movieExistsAlready = favourites.filter(({ id }) => id === movie.id);

      if (movieExistsAlready.length > 0) {
        return [...favourites];
      } else {
        return [...favourites, movie];
      }
    });
  }

  const value = {
    favourites,
    addToFavourite
  };
  return <Provider value={value} {...props} />;
}

export function useFavourite() {
  const context = React.useContext(favouriteContext);

  if (!context) {
    throw new Error('useFavourite must be used within a favourite provider ');
  }

  return context;
}

export default FavouriteProvider;
