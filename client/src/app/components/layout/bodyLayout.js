import React from 'react';

const BodyLayoutContainer = ({ children, props }) => {
  return (
    <div className={`container-${props} my-5`}>
      {children}
    </div>
  );
};

export default BodyLayoutContainer;