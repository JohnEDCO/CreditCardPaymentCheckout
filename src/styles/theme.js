import {Dimensions} from 'react-native';

export const X = Dimensions.get('window').width;
export const Y = Dimensions.get('window').height;

const colors = {
  primary: '#68D391',
  secondary: '#afdc15',
  dark: '#000000',
  light: '#FFFFFF',
};

const sizes = {
  small: X * 0.05,
  medium: X * 0.1,
  large: X * 0.2,
};

export {colors, sizes};
