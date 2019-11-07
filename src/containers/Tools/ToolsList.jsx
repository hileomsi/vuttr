import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ToolsList from '../../components/ToolsList/ToolsList';

export default function ToolsListContainer() {
  const {
    tools,
    loading,
    checkedTags,
  } = useSelector((state) => state.toolsList);
  const dispatch = useDispatch();
  const {
    removeTool,
    findTools,
    toggleCheckedTags,
  } = dispatch.toolsList;
  const { openModal } = dispatch.toolForm;

  useEffect(() => {
    findTools();
  }, [findTools]);

  return (
    <ToolsList
      toolsProps={{
        tools,
        loading,
        onRemoveTool: removeTool,
      }}
      toolActionsProps={{
        loadingSearch: loading,
        checkedTags,
        onSearch: searchTerm => findTools({ searchTerm, checkedTags }),
        onToggleFilter: toggleCheckedTags,
        onAdd: openModal,
      }}
    />
  );
}