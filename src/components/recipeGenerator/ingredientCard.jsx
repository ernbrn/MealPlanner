import React from 'react';

function IngredientCard({ measure, ingredient }) {
  return(
    <div>
      <div>{`${measure} ${ingredient}`}</div>
    </div>
  )
}

export default IngredientCard;
