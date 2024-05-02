import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function DropdownMenu({ title, items }) {
    return (
        <DropdownButton id="dropdown-basic-button" title={title}>
            {items.map((item, index) => (
                <Dropdown.Item key={index} href={`#${item.toLowerCase()}`}>{item}</Dropdown.Item>
            ))}
        </DropdownButton>
    );
}

export default DropdownMenu;
