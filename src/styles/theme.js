import {Dimensions} from 'react-native';

export const X = Dimensions.get('window').width;
export const Y = Dimensions.get('window').height;

export const scaleFont = (size) => (X / 370) * size;

const colors = {
  primary: '#68D391',
  secondary: '#afdc15',
  dark: '#000000',
  light: '#FFFFFF',
  lightGrey: '#a3a3a2',
};

const sizes = {
  small: scaleFont(12),
  medium: scaleFont(14),
  large: scaleFont(16),
};

export {colors, sizes};
