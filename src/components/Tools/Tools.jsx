import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button, Skeleton, Modal } from 'antd';
import {
  ToolsContainer,
  Title,
  Description,
  TagsContainer,
  Tag,
  Card,
} from './Tools.styles';

export default function Tools(props) {
  const {
    tools,
    loading,
    onRemoveTool,
  } = props;

  const handleConfirmRemoveTool = useCallback((id, title) => {
    Modal.confirm({
      title: 'Remove tool?',
      content: `Are you sure you want to remove ${title}?`,
      onOk: () => onRemoveTool(id),
    });
  }, [onRemoveTool]);

  const renderCard = useCallback((item) => {
    const {
      id,
      title,
      description,
      tags,
    } = item;

    return (
      <Card
        key={id}
        size="small"
        title={<Title>{title}</Title>}
        extra={(
          <Button
            onClick={() => handleConfirmRemoveTool(id, title)}
            icon="close"
            shape="circle"
            type="danger"
            size="small"
            ghost 
          />
        )}
      >
        <Description>
          {description}
        </Description>
        <TagsContainer>
          {tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
        </TagsContainer>
      </Card>
    );
  }, []);

  const renderLoading = useCallback((loadingToolsList) => {
    return (
      <>
        {Array(3).fill('').map(() => (
          <Card>
            <Skeleton loading={loadingToolsList} active>
              {/* <Meta
                title="Card title"
                description="This is the description"
              /> */}
            </Skeleton>
          </Card>
        ))}
      </>
    );
  }, []);

  return (
    <ToolsContainer>
      {loading ? renderLoading(loading) : tools.map(renderCard)}
      {!loading && tools.length === 0 && (
        <span>No tools</span>
      )}
    </ToolsContainer>
  );
}

Tools.defaultProps = {};
Tools.propTypes = {
  tools: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  onRemoveTool: PropTypes.func.isRequired,
};