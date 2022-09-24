import { useState } from 'react'

export const useMenuVisible = (state) => {
  const [menuVisible, setMenuVisible] = useState(state);
  const setMenuState = () => setMenuVisible(!menuVisible);

  return (
    menuVisible,
    setMenuState
  )
};