import React, { useState, useCallback } from 'react';
import { actions } from '@storybook/addon-actions';
import ToolsList from './ToolsList';
import ToolFormModal from '../ToolFormModal/ToolFormModal';

export default {
  title: 'ToolsList',
};

const props = {
  toolsProps: {
    tools: [
      {
        id: 1,
        title: 'Notion',
        description: 'Dolorem est dicta possimus molestiae sunt explicabo similique. Necessitatibus consequuntur voluptate id temporibus tenetur nesciunt voluptates est cumque. Magni iste pariatur ex doloremque culpa harum incidunt cum quia. Saepe officiis aut minus iure. Aperiam et reiciendis id ut maxime quam vel et et. Itaque eveniet asperiores error occaecati aut.',
        tags: ['app', 'web', 'application']
      },
      {
        id: 2,
        title: 'VSCode',
        description: 'Dolorem est dicta possimus molestiae sunt explicabo similique. Necessitatibus consequuntur voluptate id temporibus tenetur nesciunt voluptates est cumque. Magni iste pariatur ex doloremque culpa harum incidunt cum quia. Saepe officiis aut minus iure.',
        tags: ['app', 'electron', 'desktop', 'code', 'editor']
      },
    ],
    loading: false,
    ...actions('onRemoveTool'),
  },
  toolActionsProps: {
    loadingSearch: false,
    checkedTags: false,
    ...actions(
      'onSearch',
      'onToggleFilter',
      'onAdd',
    ),
  }
};

function AddModal() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <ToolsList
        toolsProps={props.toolsProps}
        toolActionsProps={{
          ...props.toolActionsProps,
          onAdd: () => setVisible(true),
        }}
      />
      <ToolFormModal
        visible={visible}
        initialValues={{
          name: '',
          link: '',
          description: '',
          tags: []
        }}
        onCancel={() => setVisible(false)}
        {...actions('onSubmit')}
      />
    </>
  );
}


export const withDefault = () => <ToolsList {...props} />;
export const withAddModal = () => <AddModal />;