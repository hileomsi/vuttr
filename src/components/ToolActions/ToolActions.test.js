import React from 'react';
import { shallow } from 'enzyme';
import ToolActions from './ToolActions';

const props = {
  loadingSearch: false,
  checkedTags: false,
  onSearch: () => {},
  onToggleFilter: () => {},
  onAdd: () => {},
};

describe('Testing ToolActions Component', () => {
  it('renders without crashing', () => {
    shallow(<ToolActions {...props} />);
  });
});