import React, { useState, useEffect } from "react";
import UserContext from "./Context";

const MainState = (props) => {
  // console.log(props);
  const [myState, setmyState] = useState({});
  const [ProductList, setProductList] = useState([]);
  // const [viewOneAstro, setviewOneAstro] = useState({});
  // const astroid = localStorage.getItem("astroId");

  return (
    <UserContext.Provider
      value={{ myState, setProductList, ProductList, setmyState }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default MainState;
