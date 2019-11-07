import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import ToolActions from '../ToolActions/ToolActions';
import Tools from '../Tools/Tools';

import { ToolsListContainer, ToolsListContent, ToolsListMain } from './ToolsList.styles';

export default function ToolsList(props) {
  const {
    toolsProps,
    toolActionsProps,
  } = props;

  return (
    <ToolsListContainer>
      <ToolsListContent>
        <Header />
        <ToolActions {...toolActionsProps} />
        <ToolsListMain>
          <Tools {...toolsProps} />
        </ToolsListMain>
      </ToolsListContent>
    </ToolsListContainer>
  );
}

ToolsList.defaultProps = {};
ToolsList.propTypes = {
  toolsProps: PropTypes.shape(Tools.propTypes).isRequired,
  toolActionsProps: PropTypes.shape(ToolActions.propTypes).isRequired,
};