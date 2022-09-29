import { useEffect, useState } from 'react'

export const useImageChange = () => {
  const [imageState, setImageState] = useState('https://via.placeholder.com/450');

  useEffect(() => {
    setImageState(imageState);
  }, [imageState]);

  return [imageState, setImageState];
}
