import React from 'react';
import { shallow } from 'enzyme';
import ToolFormModal from './ToolFormModal';

const props = {
  visible: true,
  loading: false,
  initialValues: {
    name: '',
    link: '',
    description: '',
    tags: []
  },
  onSubmit: () => {},
};

describe('Testing ToolFormModal Component', () => {
  it('renders without crashing', () => {
    shallow(<ToolFormModal {...props} />);
  });
});