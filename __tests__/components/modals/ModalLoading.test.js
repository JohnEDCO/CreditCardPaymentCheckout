import React from 'react';
import {render, cleanup} from '@testing-library/react-native';
import Loading from '../../../src/components/modals/ModalLoading';

describe('Loading component', () => {
  afterEach(cleanup);

  test('should render the Loading modal when visible is true', () => {
    const {getByTestId} = render(<Loading visible={true} />);
    expect(getByTestId('loading-modal')).toBeTruthy();
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  test('should not render the Loading modal when visible is false', () => {
    const {queryByTestId} = render(<Loading visible={false} />);
    expect(queryByTestId('loading-modal')).toBeNull();
  });
});
