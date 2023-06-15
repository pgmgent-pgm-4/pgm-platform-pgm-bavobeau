import React from 'react';

const GridLayoutContainer = ({ children, amount }) => {
  return (
    <div className={`row row-cols-1 row-cols-md-${amount} g-4 my-1 mx-auto`}>
      {children}
    </div>
  );
};

export default GridLayoutContainer;