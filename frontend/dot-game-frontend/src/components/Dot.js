import React from 'react';

function Dot({ size, onClick }) {
  return (
      <div
          onClick={onClick}
          style={{
            width: size,
            height: size,
            backgroundColor: 'red',
            margin: '5px',
            display: 'inline-block'
          }}
      />
  );
}

export default Dot;
