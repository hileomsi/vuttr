import { message } from 'antd';
import * as Tools from '../../services/Tools.service';

export const removeTool = dispatch => {
  const { toolsList } = dispatch;

  return async (toolId, rootState) => {
    try {
      toolsList.setLoading(true);
      await Tools.remove(toolId);
      toolsList.removeToolById(toolId);
      message.success('Tools removed');
    } catch(err) {
      message.error(`Internal error: ${err.message}`);
    } finally {
      toolsList.setLoading(false);
    }
  };
}

export const findTools = dispatch => {
  const { toolsList } = dispatch;

  return async (filters, rootState) => {
    try {
      toolsList.setLoading(true);
      const response = await Tools.find(filters)
      toolsList.setTools(response);
    } catch(err) {
      message.error(`Internal error: ${err.message}`);
    } finally {
      toolsList.setLoading(false);
    }
  };
}

export default (dispatch) => ({
  removeTool: removeTool(dispatch),
  findTools: findTools(dispatch),
});