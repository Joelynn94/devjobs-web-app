import React, { useEffect, useState } from 'react';

const useWindow = () => {
  const [size, setSize] = useState(window.innerwidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResize = () => {
    setSize(window.innerWidth);
  };

  return size;
};

export default useWindow;
