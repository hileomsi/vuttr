import React from 'react';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import ToolFormModal from '../../components/ToolFormModal/ToolFormModal';

const createValidation = () => yup.object().shape({
  title: yup.string()
    .required('Title is required'),
  link: yup.string()
    .url('Link is incorrect format')
    .required('Link is required'),
  description: yup.string()
    .required('Description is required'),
  tags: yup.array()
    .required('Tags is required'),
});

export default function ToolFormModalContainer() {  
  const {
    initialValues,
    loading,
    visible,
  } = useSelector((state) => state.toolForm);
  const dispatch = useDispatch();
  const { createTool, closeModal } = dispatch.toolForm;
  const validationSchema = createValidation();

  return (
    <ToolFormModal
      visible={visible}
      initialValues={{
        ...initialValues,
        tags: [...initialValues.tags]
      }}
      onSubmit={createTool}
      onCancel={closeModal}
      loading={loading}
      validationSchema={validationSchema}
    />
  );
}