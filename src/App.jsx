import React from 'react';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import './styles/app.css';

import createStore from './models/createStore';

import ToolsList from './containers/Tools/ToolsList';
import ToolFormModal from './containers/Tools/ToolFormModal';

const { store } = createStore();

function App() {
  return (
    <Provider store={store}>
      <ToolsList />
      <ToolFormModal />
    </Provider>
  );
}

export default App;
