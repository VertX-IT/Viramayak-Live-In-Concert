import React, { useState } from 'react';

const SeeMoreButton = () => {
  const [buttonContent, setButtonContent] = useState('SEE MORE');

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const buttonStyle = {
    backgroundColor: '#dfb879',
    color: 'darkblue',
    borderRadius: '20px',
    padding: '15px 30px',
    border: 'none',
    cursor: 'pointer',
    width: '200px',
    fontWeight: 'bold',
    textTransform: 'uppercase',  // Make the text uppercase
  };

  const handleClick = () => {
    setButtonContent((prevContent) =>
      prevContent === 'SEE MORE' ? 'SEE LESS' : 'SEE MORE'
    );
  };

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: 'center' }}>
        <button style={buttonStyle} onClick={handleClick}>
          {buttonContent}
        </button>
      </div>
    </div>
  );
};

export default SeeMoreButton;
