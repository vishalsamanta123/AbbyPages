import React, { useState } from "react";
export const AuthContext = React.createContext();

export const UserContext = React.createContext();
export const UserProvider = (props) => {
  const [userData, setUserData] = useState([]);
  return (
    <UserContext.Provider value={[userData, setUserData]}>
      {props.children}
    </UserContext.Provider>
  );
};

export const CartContext = React.createContext();
export const CartProvider = (props) => {
  const [cartData, setCartData] = useState([]);
  return (
    <CartContext.Provider value={[cartData, setCartData]}>
      {props.children}
    </CartContext.Provider>
  );
};

export const ServiceProviderContext = React.createContext();
export const ServiceProvider = (props) => {
  const [serviceProviderData, setServiceProviderData] = useState([]);
  return (
    <ServiceProviderContext.Provider
      value={[serviceProviderData, setServiceProviderData]}
    >
      {props.children}
    </ServiceProviderContext.Provider>
  );
};

export const ServiceProviderContextQueAnsData = React.createContext();
export const ServiceProviderQueAns = (props) => {
  const [serviceProviderQueAnsData, setServiceProviderQueAnsData] = useState(
    []
  );
  return (
    <ServiceProviderContextQueAnsData.Provider
      value={[serviceProviderQueAnsData, setServiceProviderQueAnsData]}
    >
      {props.children}
    </ServiceProviderContextQueAnsData.Provider>
  );
};
export const ShoppingCartContext = React.createContext();
export const ShoppingCartProvider = (props) => {
  const [shoppingCartData, setShoppingCartData] = useState([]);
  return (
    <ShoppingCartContext.Provider
      value={[shoppingCartData, setShoppingCartData]}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};
export const OrderCategorySelect = React.createContext();
export const OrderCategorySelectProvider = (props) => {
  const [acctiveSelectedCatgory, setAcctiveSelectedCatgory] = useState({
    activeIndex: 0,
    businsessType: 1,
  });
  return (
    <OrderCategorySelect.Provider
      value={[acctiveSelectedCatgory, setAcctiveSelectedCatgory]}
    >
      {props.children}
    </OrderCategorySelect.Provider>
  );
};
export const AddItemCategory = React.createContext();
export const AddItemCategortyProvider = (props) => {
  const [activeCategory, setactiveCategory] = useState({
    activeIndex: 0,
    categoryId: 1,
  });
  return (
    <AddItemCategory.Provider value={[activeCategory, setactiveCategory]}>
      {props.children}
    </AddItemCategory.Provider>
  );
};
