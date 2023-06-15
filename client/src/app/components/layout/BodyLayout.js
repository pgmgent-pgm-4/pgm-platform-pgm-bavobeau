import React from 'react';

const BodyLayoutContainer = ({ children }) => {


  return (
    <div className={`container-md my-5`} >
      {children}
    </div>
  );
};

export default BodyLayoutContainer;
