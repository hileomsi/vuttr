import React from 'react';
import { actions } from '@storybook/addon-actions';
import Tools from './Tools';

export default {
  title: 'Tools',
};

const props = {
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
};

export const withDefault = () => <Tools {...props} />;

export const withLoading = () => <Tools {...props} loading />;