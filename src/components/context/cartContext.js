import React, {createContext, useState} from "react";

export const cartContext = createContext([]);


const CartContextProvider = ({children}) => {
    const [cartList, setcartList] = useState([])

    const addCart = (item) =>{
        setcartList([...cartList, item])
    }
    const clear = () =>{
        setcartList([])
    }


    return (
        <cartContext.Provider value={{
            cartList,
            addCart,
            clear
        }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider