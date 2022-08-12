import { createContext, useState } from "react";

export const CartContext = createContext({
  ids: [],
  addToCart: (id) => {},
  removeFromCart: (id) => {},
});

function CartContextProvider({ children }) {
  const [savedIds, setSavedIds] = useState([]);

  function addToCart(id) {
    setSavedIds((currentIds) => [...currentIds, id]);
  }

  function removeFromCart(id) {
    setSavedIds((currentIds) => currentIds.filter((currId) => currId != id));
  }

  const value = {
    ids: savedIds,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContextProvider;
