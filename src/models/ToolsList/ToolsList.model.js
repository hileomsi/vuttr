import Immutable from 'seamless-immutable';
import configureEffect from './ToolsList.effects';

export default {
  state: Immutable({
    tools: [],
    loading: false,
    checkedTags: false,
  }),
  reducers: {
    setLoading: (state, loading) => state.set('loading', loading),
    setTools: (state, tools) => state.set('tools', tools),
    toggleCheckedTags: (state) => state.set('checkedTags', !state.checkedTags),
    addTool: (state, tool) => state.set('tools',  [...state.tools, tool]),
    removeToolById: (state, toolId) => state.set('tools', state.tools.filter(tool => tool.id !== toolId)),
  },
  effects: configureEffect,
};