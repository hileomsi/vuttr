import React from 'react';
import { actions } from '@storybook/addon-actions';
import ToolFormModal from './ToolFormModal';

export default {
  title: 'ToolFormModal',
};

const props = {
  visible: true,
  loading: false,
  initialValues: {
    name: '',
    link: '',
    description: '',
    tags: []
  },
  ...actions(
    'onSubmit',
  )
};

export const withDefault = () => <ToolFormModal {...props} />;

export const withLoading = () => <ToolFormModal {...props} loading />;