import React from 'react';
import {render} from '@testing-library/react-native';
import ModalDetailProduct from '../../../src/components/modals/ModalDetailProduct';
import {products} from '../../../src/utils/staticData';
jest.mock('../../../src/store/actions/cart', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    addItemToCart: jest.fn(),
  })),
}));

describe('ModalDetailProduct', () => {
  const mockSetInfoModal = jest.fn();

  const product = {
    name: 'Test Product',
    price: 99.99,
    description: 'A test product description.',
    includesDescription: ['Feature 1', 'Feature 2', 'Feature 3'],
    image: products[0].image,
  };

  it('renders correctly when visible is true', () => {
    const {getByText} = render(
      <ModalDetailProduct
        visible={true}
        product={product}
        setInfoModal={mockSetInfoModal}
      />,
    );

    expect(getByText('Test Product')).toBeTruthy();
    expect(getByText('A test product description.')).toBeTruthy();
    expect(getByText('$99.99')).toBeTruthy();
  });

  it('does not render when visible is false', () => {
    const {queryByText} = render(
      <ModalDetailProduct
        visible={false}
        product={product}
        setInfoModal={mockSetInfoModal}
      />,
    );

    expect(queryByText('Test Product')).toBeNull();
  });
});
