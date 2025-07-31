import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [lang, setLang] = useState('ar');
  const [menu, setMenu] = useState([]);

  // تحميل السلة من localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('memo-cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // حفظ السلة عند التغيير
  useEffect(() => {
    localStorage.setItem('memo-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart(prev => {
      const exist = prev.find(i => i.id === item.id);
      if (exist) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const changeQuantity = (id, delta) => {
    setCart(prev => prev.map(i => i.id === id ? { ...i, quantity: i.quantity + delta } : i)
      .filter(i => i.quantity > 0));
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    changeQuantity,
    total,
    lang,
    setLang,
    menu,
    setMenu
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
