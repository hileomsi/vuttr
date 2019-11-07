import Http from '../helpers/Http';

export function find(filters = {}) {
  const {
    searchTerm,
    checkedTags,
  } = filters;

  const params = checkedTags ? { tags_like: searchTerm } : { q: searchTerm };
  
  return Http.get('tools', { params });
}

export function create(tool) {
  return Http.post('tools', tool);
}

export function remove(id) {
  return Http.delete(`tools/${id}`);
}