import React from 'react';

const NumberDisplay = ({ amount }) => {
  // Format the number with commas as thousand separators
  const formattedAmount = amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
      <p className='font-bold'>{`${formattedAmount} :-`}</p>
  );
};

export default NumberDisplay;
