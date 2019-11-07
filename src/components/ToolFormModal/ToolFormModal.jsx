import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useField, useFormikContext } from 'formik';
import { Modal, Input, Select, Spin } from 'antd';
import {
  ToolFormModalContainer,
  Form,
  FieldContainer,
  Label,
  InputContainer,
  Error,
} from './ToolFormModal.styles';

export function Field(props) {
  const {
    label,
    required,
    type,
    ...rest
  } = props;

  const [field, meta] = useField(rest);
  const { setFieldValue, setFieldTouched } = useFormikContext();

  const renderInputType = useCallback(() => {
    switch (type) {
      case 'textarea':
        return <Input.TextArea {...field} {...rest} />
      case 'select':
        return (
          <Select
            {...field}
            {...rest}
            onChange={(value, option) => setFieldValue(field.name, value)}
            onBlur={value => setFieldTouched(field.name)}
            style={{ width: '100%' }}
          />
        );
      case 'input':
      default:
        return <Input {...field} {...rest} />
    }
  }, [type, rest, field, setFieldValue, setFieldTouched]);
  
  return (
    <FieldContainer>
      <Label required={required}>{label}</Label>
      <InputContainer>
        {renderInputType()}
      </InputContainer>
      {meta.touched && meta.error && (
        <Error>{meta.error}</Error>
      )}
    </FieldContainer>
  );
}

export default function ToolFormModal(props) {
  const {
    visible,
    onSubmit,
    initialValues,
    onCancel,
    loading,
    validationSchema,
  } = props;

  const okButtonProps = {
    disabled: loading,
    loading: loading,
  };

  return (
    <ToolFormModalContainer>
      <Form
        initialValues={initialValues}
        onSubmit={(form, actions) => onSubmit({ form, actions })}
        validationSchema={validationSchema}
      >
        {(form) => (
          <Modal
            visible={visible}
            onOk={form.handleSubmit}
            onCancel={onCancel}
            loading={loading}
            okButtonProps={okButtonProps}
            title="Add new tool"
            okText="Add tool"
            cancelText="Cancel"
          > 
            <Spin spinning={loading}>
              <Field
                required
                type="input"
                name="title"
                label="Tool name"
                placeholder="Ex.: Sketch, VSCode, Sentry"
              />
              <Field
                required
                type="input"
                name="link"
                label="Tool link"
                placeholder="Ex.: https://www.youtube.com"
              />
              <Field
                required
                type="textarea"
                name="description"
                label="Tool description"
                placeholder="Ex.: Sunt beatae rerum quis consequatur et. Quis aut quis modi distinctio minima culpa deserunt."
                autoSize={{ minRows: 5 }}
              />
              <Field
                required
                type="select"
                label="Tags"
                mode="tags"
                name="tags"
                placeholder="Ex.: #production #dev #manager"
                notFoundContent="Write tag and enter"
              />
            </Spin>
          </Modal>
        )}
      </Form>
    </ToolFormModalContainer>
  );
}

ToolFormModal.defaultProps = {
  onCancel: null,
  validationSchema: null,
};
ToolFormModal.propTypes = {
  initialValues: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  validationSchema: PropTypes.object,
};