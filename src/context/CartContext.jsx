import { createContext, useEffect, useState } from "react"

export const CartContext = createContext();
const CartContextProvider = ({children}) => {
    const [productos,setProductos] = useState([])

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('carrito'))
        if (cartData) {
            setProductos(cartData)
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(productos))
    }, [productos])

    

    const addProducto = (id,cant) =>{
        
        const mismo =productos.find(item=> item.id === id)
        if(mismo){
            mismo.cant+=cant
            setProductos([
                ...productos.filter(item => item.id !== id),
                mismo
            ])
            localStorage.setItem('carrito',JSON.stringify(productos))
        }else{
            setProductos([
                ...productos,
                {
                    id:id,
                    cant:cant
                }
            ])
            localStorage.setItem('carrito',JSON.stringify(productos))
        }
        
    }
    

    const eliminarCarrito =() =>{
        setProductos([])
        localStorage.removeItem('carrito')
    }

    const eliminarArticulo = (codigo) =>{
        setProductos(productos.filter(item => item.id !== codigo))
    }

    
    return (
        <CartContext.Provider value={{productos,addProducto,eliminarCarrito,eliminarArticulo}}>
            {children}
        </CartContext.Provider>
    )
    
}
export default CartContextProvider