import {Dimensions} from 'react-native';

export const X = Dimensions.get('window').width;
export const Y = Dimensions.get('window').height;

const colors = {
  primary: '#68D391',
  secondary: '#afdc15',
  dark: '#000000',
  light: '#FFFFFF',
  lightGrey: '#a3a3a2',
};

const sizes = {
  // small: 12,
  small: X * 0.03,
  // medium: 14,
  medium: X * 0.04,
  // large: 16,
  large: X * 0.05,
};

export {colors, sizes};
