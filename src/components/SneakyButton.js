import React from 'react';

const buttonStyle = {
    width: '100%',
    height: '33px',
};

const SneakyButton = ({ label, onClick }) => (
    <button style={buttonStyle} onClick={onClick}>{label}</button>
)

export default SneakyButton;