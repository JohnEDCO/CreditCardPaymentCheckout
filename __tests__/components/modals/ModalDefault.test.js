import React from 'react';
import {render} from '@testing-library/react-native';
import CustomModal from '../../../src/components/modals/ModalDefault';
import useApp from '../../../src/store/actions/app';

jest.mock('../../../src/store/actions/app', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    hideModalInfo: jest.fn(),
  })),
}));

describe('CustomModal Component', () => {
  let mockHideModalInfo;

  beforeEach(() => {
    mockHideModalInfo = useApp().hideModalInfo;
  });

  it('renders correctly when visible', () => {
    const {getByText, queryByText} = render(
      <CustomModal
        visible={true}
        title="Modal Title"
        content="This is the modal content."
      />,
    );

    expect(getByText('Modal Title')).toBeTruthy();
    expect(getByText('This is the modal content.')).toBeTruthy();
    expect(getByText('Close')).toBeTruthy();
    expect(queryByText('Non-existing text')).toBeNull();
  });

  it('does not render when not visible', () => {
    const {queryByText} = render(
      <CustomModal
        visible={false}
        title="Modal Title"
        content="This is the modal content."
      />,
    );

    expect(queryByText('Modal Title')).toBeNull();
    expect(queryByText('This is the modal content.')).toBeNull();
    expect(queryByText('Close')).toBeNull();
  });
});
