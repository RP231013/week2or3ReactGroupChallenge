import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function DropdownMenu({ title, items, onSelectItem }) {
    return (
        <DropdownButton id={`dropdown-${title}`} title={title}>
            {items.map((item, index) => (
                <Dropdown.Item key={index} onClick={() => onSelectItem(item)}>
                    {item}
                </Dropdown.Item>
            ))}
        </DropdownButton>
    );
}

export default DropdownMenu;
