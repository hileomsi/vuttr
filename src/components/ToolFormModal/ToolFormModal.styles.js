import styled, { css } from 'styled-components';
import { Formik } from 'formik';

export const ToolFormModalContainer = styled.div``;
export const Form = styled(Formik)``;
export const FieldContainer = styled.div`
  margin-bottom: 15px;
`;
export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 12px;

  ${props => props.required && css`
    :after {
      content: '*';
      color: red;
    }
  `}
`;
export const InputContainer = styled.div``;
export const Error = styled.span`
  font-size: 11px;
  color: red;
`;