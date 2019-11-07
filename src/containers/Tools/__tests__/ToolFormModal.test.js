import React from 'react';
import { shallow } from 'enzyme';
import ToolFormModal from '../ToolFormModal';

describe('Testing Header Component', () => {
  it('renders without crashing', () => {
    shallow(<ToolFormModal />);
  });
});