import React from 'react';
import {render} from '@testing-library/react-native';
import Separator from '../../../src/components/separators/Separator';
describe('Separator', () => {
  it('should render correctly', () => {
    const {getByTestId} = render(<Separator />);
    const separator = getByTestId('separator');
    expect(separator).toBeTruthy();
  });
});
