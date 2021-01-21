import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ({ scene, previous, navigation }) => {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  const _goBack = () => console.log('Went back');

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default Header;
