import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomInput from '../../../src/components/inputs/InputDefault';
import useApp from '../../../src/store/actions/app';

jest.mock('../../../src/store/actions/app', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    setIconCard: jest.fn(),
  })),
}));

jest.mock('../../../src/utils/utils', () => ({
  validateCard: jest.fn(),
}));

describe('CustomInput Component', () => {
  let mockSetIconCard;

  beforeEach(() => {
    mockSetIconCard = useApp().setIconCard;
  });

  it('renders with a label and placeholder', () => {
    const { getByText, getByPlaceholderText } = render(
      <CustomInput label="Card Number" placeholder="Enter card number" />
    );

    expect(getByText('Card Number')).toBeTruthy();
    expect(getByPlaceholderText('Enter card number')).toBeTruthy();
  });

  it('calls onChangeText with the correct value for text input', () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
      <CustomInput
        placeholder="Enter text"
        value=""
        onChangeText={onChangeTextMock}
      />
    );

    const input = getByPlaceholderText('Enter text');
    fireEvent.changeText(input, 'Hello');
    expect(onChangeTextMock).toHaveBeenCalledWith('Hello');
  });

  it('formats text as a date for type "dateCard"', () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
      <CustomInput
        placeholder="MM/YY"
        value=""
        onChangeText={onChangeTextMock}
        type="dateCard"
      />
    );

    const input = getByPlaceholderText('MM/YY');
    fireEvent.changeText(input, '1225');
    expect(onChangeTextMock).toHaveBeenCalledWith('12/25');
  });

  it('filters out non-numeric characters for numeric inputs', () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
      <CustomInput
        placeholder="Enter numbers"
        value=""
        onChangeText={onChangeTextMock}
        keyboardType="numeric"
      />
    );

    const input = getByPlaceholderText('Enter numbers');
    fireEvent.changeText(input, '123abc456');
    expect(onChangeTextMock).toHaveBeenCalledWith('123456');
  });

  it('applies the correct maxLength property', () => {
    const { getByPlaceholderText } = render(
      <CustomInput
        placeholder="Enter text"
        value=""
        onChangeText={() => {}}
        maxLength={10}
      />
    );

    const input = getByPlaceholderText('Enter text');
    expect(input.props.maxLength).toBe(10);
  });
});
