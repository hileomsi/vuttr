import React from 'react';
import { shallow } from 'enzyme';
import ToolsList from '../ToolsList';

describe('Testing Header Component', () => {
  it('renders without crashing', () => {
    shallow(<ToolsList />);
  });
});