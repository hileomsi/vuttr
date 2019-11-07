import React from 'react';
import { shallow } from 'enzyme';
import ToolsList from './ToolsList';

const props = {
  toolsProps: {
    tools: [
      {
        id: 1,
        title: 'Notion',
        description: 'Dolorem est dicta possimus molestiae sunt explicabo similique. Necessitatibus consequuntur voluptate id temporibus tenetur nesciunt voluptates est cumque. Magni iste pariatur ex doloremque culpa harum incidunt cum quia. Saepe officiis aut minus iure. Aperiam et reiciendis id ut maxime quam vel et et. Itaque eveniet asperiores error occaecati aut.',
        tags: ['app', 'web', 'application']
      },
    ],
    loading: false,
    onRemoveTool: () => {},
  },
  toolActionsProps: {
    loadingSearch: false,
    checkedTags: false,
    onSearch: () => {},
    onToggleFilter: () => {},
    onAdd: () => {},
  }
};


describe('Testing ToolsList Component', () => {
  it('renders without crashing', () => {
    shallow(<ToolsList {...props} />);
  });
});