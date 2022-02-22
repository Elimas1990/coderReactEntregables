import { useContext, useEffect, useState } from "react"
import { CartContext } from "./context/CartContext"
import customFetch from "./utils/CustomFetch"
import firestoreFetch from "./utils/firebaseFetch"

const CartWidget = ()=>{
    const test = useContext(CartContext)
    const [productos,setProductos] = useState([])
    useEffect(()=>{
        firestoreFetch({})
            .then(resultado=> setProductos(resultado))
            .catch(err => console.log(err))
    },[])
   
    const cant=test.productos.map(item =>item.cant).reduce((prev, curr) => prev + curr, 0);

    const precio=test.productos.map(item =>{

        return productos.find(producto => producto.id === item.id)?.precio*item.cant;
    }).reduce((prev, curr) => prev + curr, 0);

    return(
        <>
            <button type="button" className="btn btn-primary position-relative shadow" id="button-carrito" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <i className="fas fa-shopping-cart"></i> Total: $<span id="carrito_subtotal">{precio}</span>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id="notificador_articulos">{cant}</span>
            </button>
        </>
    )
}

export default CartWidget