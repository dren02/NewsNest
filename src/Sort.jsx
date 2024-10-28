import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Sort.css';
import React from 'react';

function Sort({onSort}) {
    const handleSort = (sort) => {
        onSort(sort);
      };
  return (
    <div id="sort-button">
    <DropdownButton title="Sort">
      <Dropdown.Item onClick={() => handleSort('newest')}>Newest - default</Dropdown.Item>
      <Dropdown.Item onClick={() => handleSort('oldest')}>Oldest</Dropdown.Item>
    </DropdownButton>
    </div>
  );
}

export default Sort;