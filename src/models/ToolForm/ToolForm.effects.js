import { message } from 'antd';
import * as Tools from '../../services/Tools.service';

export const createTool = dispatch => {
  const { toolForm } = dispatch;

  return async ({ form, actions }, rootState) => {
    try {
      toolForm.setLoading(true);
      const response = await Tools.create(form);
      toolForm.closeModal();
      toolForm.setLoading(false);
      toolForm.resetInitialValues();
      actions.resetForm();
      dispatch.toolsList.addTool(response);
      message.success('Tool created'); 
    } catch(err) {
      toolForm.setLoading(false);
      message.error(`Internal error: ${err.message}`);
    }
  };
}

export default (dispatch) => ({
  createTool: createTool(dispatch),
});