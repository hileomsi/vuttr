import React from 'react';
import { actions } from '@storybook/addon-actions';
import ToolActions from './ToolActions';

export default {
  title: 'ToolActions',
};

const props = {
  loadingSearch: false,
  checkedTags: false,
  ...actions(
    'onSearch',
    'onToggleFilter',
    'onAdd',
  ),
};

export const withDefault = () => <ToolActions {...props} />;