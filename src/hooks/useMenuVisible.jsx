import { useState } from 'react'

export const useMenuVisible = (state) => {
  const [menuVisible, setMenuVisible] = useState(state);

  return [menuVisible, setMenuVisible];
};