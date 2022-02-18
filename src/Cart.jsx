import { useContext, useEffect, useState } from "react"
import CartItem from "./CartItem"
import { CartContext } from "./context/CartContext"
import customFetch from "./utils/CustomFetch"
import firestoreFetch from "./utils/firebaseFetch"

const Cart = () =>{
    const test = useContext(CartContext)
    const [productos,setProductos] = useState([])
    useEffect(()=>{
        firestoreFetch({})
            .then(resultado=> setProductos(resultado))
            .catch(err => console.log(err))
    },[])

    const limpiarCarro = () =>{
        test.eliminarCarrito();
    }
    const limpiarArticulo = (id) =>{
        test.eliminarArticulo(id);
    }
    return (
        <>
            <div className="container">
                <div className="row my-3">
                    <div className="col-9 text-center"><h2>Carrito de Compras</h2></div>
                    <div className="col-3"><button className="btn btn-danger float-end" onClick={limpiarCarro}>Limpiar Carrito <i className="fa fa-trash"></i></button></div>
                </div>
                
                {
                    
                    test.productos.map((item,index)=>{
                        const prod =productos.find(producto => producto.id === item.id);
                
                        return <CartItem producto={prod} cant={item} key={index} limpiarArticulo={limpiarArticulo}/>
                        
                    })
                }
            </div>
            
        </>
    )
}
export default Cart