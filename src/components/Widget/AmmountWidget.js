import React from 'react';

const AmmountWidget = ({ number }) => {
    const formattedNumber = number.toLocaleString("es-ES");
  
    return (
      <span>${formattedNumber}</span>
    );
  };
  
  export default AmmountWidget;