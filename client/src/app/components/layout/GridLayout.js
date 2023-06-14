import React from 'react';

const GridLayoutContainer = ({ children }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 my-1 mx-auto">
      {children}
    </div>
  );
};

export default GridLayoutContainer;