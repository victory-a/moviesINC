import React from 'react';
import { View, Text } from 'react-native';

const favouriteContext = React.createContext;

export default function FavouriteContext({ children }) {
  const { Provider } = favouriteContext;
  const [favourites, setFavourite] = useState([]);

  const value = {
    favourites,
    setFavourite
  };
  return <Provider value={value}>{children}</Provider>;
}

export function useFavourite() {
  const contect = React.useContext(favouriteContext);

  if (!context) {
    throw new Error('useFavourite must be used within a favourite provider ');
  }
}
