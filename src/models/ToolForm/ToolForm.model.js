import Immutable from 'seamless-immutable';
import configureEffect from './ToolForm.effects';

const defaultForm = {
  title: '',
  link: '',
  description: '',
  tags: []
};

const defaultState = Immutable({
  visible: false,
  loading: false,
  initialValues: defaultForm,
});

export default {
  state: defaultState,
  reducers: {
    openModal: (state) => state.set('visible', true),
    closeModal: (state) => state.set('visible', false),
    setLoading: (state, loading) => state.set('loading', loading),
    resetInitialValues: (state) => state.set('initialValues', defaultForm),
  },
  effects: configureEffect,
};