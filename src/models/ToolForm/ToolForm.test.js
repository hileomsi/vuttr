import Immutable from 'seamless-immutable';
import ToolFormModel from './ToolForm.model';

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

describe('ToolFormModel model', () => {
  it('reducer openModal', () => {
    const expectState = defaultState.set('visible', true);

    expect(ToolFormModel.reducers.openModal(defaultState)).toEqual(expectState);
  });

  it('reducer closeModal', () => {
    const state = defaultState.set('visible', true);
    const expectState = defaultState.set('visible', false);

    expect(ToolFormModel.reducers.closeModal(state)).toEqual(expectState);
  });

  it('reducer setLoading', () => {
    const payload = true;
    const expectState = defaultState.set('loading', true);

    expect(ToolFormModel.reducers.setLoading(defaultState, payload)).toEqual(expectState);
  });

  it('reducer resetInitialValues', () => {
    const state = defaultState.set('initialValues', {
      title: 'VSCode',
      link: 'https://',
      description: 'example',
      tags: ['tags']
    });
    const expectState = defaultState;

    expect(ToolFormModel.reducers.resetInitialValues(state)).toEqual(expectState);
  });
});