import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Sort({onSort}) {
    const handleSort = (sort) => {
        onSort(sort);
      };
  return (
    <DropdownButton id="sort-button" title="Dropdown button">
      <Dropdown.Item onClick={() => handleSort('newest')}>Newest - default</Dropdown.Item>
      <Dropdown.Item onClick={() => handleSort('oldest')}>Oldest</Dropdown.Item>
    </DropdownButton>
  );
}

export default Sort;