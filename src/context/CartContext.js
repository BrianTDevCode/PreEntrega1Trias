import React, {createContext} from "react";
import { useState } from "react";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





// 1 - creamos 
export const CartContext = createContext();



// 2- compontent provider

export const  CartProvider = ({children}) => {
    let data = [];
    let totalPrice = 0;

    const [items, setItems] = useState([]);
   
    

    

    const [message, setMessage] = useState('') 
    
  
    function addItem(item){
        

       //buscar repetidos
        const element = items.find(i=>i.id === item.id);
       
        if (element === undefined) {
             data = [...items,item];
             setItems(data);
          
        }
       
        else{
            
            
           setMessage( toast.success('El producto ya se encuentra en el carrito!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                }));
        }
    
        
    }

  

    function removeItem(id){
        
        const filter = items.filter((obj) => obj.id !== id);
        setItems(filter);
        
    }

    function cleanCart(){
        
        setItems([]);
       ;
    }


    function calcProds(){

        let prods = items.reduce(
             (acc, element) =>
               acc + element.quantity,
             0
           );
 
           return prods;
     }

    function calcPrice(){

       totalPrice = items.reduce(
            (acc, element) =>
              acc + element.price * element.quantity,
            0
          );
          return totalPrice;
    }

    // 3 - return context

return(

   
    <CartContext.Provider value={{items,setItems, addItem,removeItem, cleanCart, calcPrice, calcProds, message }}>
       {children} 
    </CartContext.Provider>
)
}


