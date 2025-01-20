import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CustomButton from '../../../src/components/buttons/ButtonDefault';

describe('CustomButton Component', () => {
  it('renders the button with the correct title', () => {
    const {getByText} = render(
      <CustomButton title="Click Me" onPress={() => {}} />,
    );
    const buttonText = getByText('Click Me');
    expect(buttonText).toBeTruthy();
  });

  it('calls the onPress function when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <CustomButton title="Press Me" onPress={onPressMock} />
    );
    const button = getByText('Press Me');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when disabled', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <CustomButton title="Disabled Button" onPress={onPressMock} disabled />
    );
    const button = getByText('Disabled Button');
    fireEvent.press(button);
    expect(onPressMock).not.toHaveBeenCalled();
  });

});
