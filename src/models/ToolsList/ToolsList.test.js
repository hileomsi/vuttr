import Immutable from 'seamless-immutable';
import ToolsListModel from './ToolsList.model';

const defaultState = Immutable({
  tools: [],
  loading: false,
  checkedTags: false,
});

describe("ToolsListModel model", () => {
  it('reducer setLoading', () => {
    const payload = true;
    const expectState = defaultState.set('loading', true);

    expect(ToolsListModel.reducers.setLoading(defaultState, payload)).toEqual(expectState);
  });

  it('reducer toggleCheckedTags', () => {
    const expectState = defaultState.set('checkedTags', true);

    expect(ToolsListModel.reducers.toggleCheckedTags(defaultState)).toEqual(expectState);
  });

  it('reducer removeToolById', () => {
    const state = defaultState.set('tools', [{
      id: 2,
      title: "json-server",
      link: "https://github.com/typicode/json-server",
      description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
      tags: [
        "api",
        "json",
        "schema",
        "node",
        "github",
        "rest"
      ]
    }]);
    const payload = 2; // toolId
    const expectState = defaultState.set('tools', []);

    expect(ToolsListModel.reducers.removeToolById(state, payload)).toEqual(expectState);
  });

  it('reducer setTools', () => {
    const payload = [{
      id: 2,
      title: "json-server",
      link: "https://github.com/typicode/json-server",
      description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
      tags: [
        "api",
        "json",
        "schema",
        "node",
        "github",
        "rest"
      ]
    }];
    const expectState = defaultState.set('tools', payload);

    expect(ToolsListModel.reducers.setTools(defaultState, payload)).toEqual(expectState);
  });
});