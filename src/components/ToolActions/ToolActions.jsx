import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, Checkbox } from 'antd';
import {
  ToolActionsContainer,
  Search,
  CheckboxContainer,
} from './ToolActions.styles';

export default function ToolActions(props) {
  const {
    loadingSearch,
    checkedTags,
    onSearch,
    onToggleFilter,
    onAdd,
  } = props;

  return (
    <ToolActionsContainer>
      <Row>
        <Col span={8}>
          <Search
            placeholder="Search"
            onSearch={onSearch}
            loading={loadingSearch}
          />
          <CheckboxContainer>
            <Checkbox
              checked={checkedTags}
              onChange={onToggleFilter}
            >
              search in tags only
            </Checkbox>
          </CheckboxContainer>
        </Col>
        <Col span={8} offset={8}>
          <Row type="flex" justify="end">
            <Button
              type="primary"
              icon="plus"
              onClick={onAdd}
            >
              Add
            </Button>
          </Row>
        </Col>
      </Row>
    </ToolActionsContainer>
  );
}

ToolActions.defaultProps = {};
ToolActions.propTypes = {
  loadingSearch: PropTypes.bool.isRequired,
  checkedTags: PropTypes.bool.isRequired,
  onSearch: PropTypes.func.isRequired,
  onToggleFilter: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};