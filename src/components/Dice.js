import React from 'react';
import '../style.css/Dice.css'
const Dice = ({ value }) => {
  return (
    <div className="dice">
      {value}
    </div>
  );
};

export default Dice;
