import { useState } from "react"

const ItemCount = ({stock,nombre}) =>{
    const [cantProducto, setCantProducto] = useState(1)

    const incrementar= ()=>{
        if(cantProducto < stock) setCantProducto(cantProducto+1);
    }
    const decrementar= ()=>{
        if(cantProducto > 1) setCantProducto(cantProducto-1);
    }
    const agregarAlCarrito = () =>{
        console.log(`Producto: ${nombre}
        Cant: ${cantProducto}`)
    }
    return(
        <>
            <div className="input-group mb-3 w-100">
                <button className="btn btn-outline-danger" type="button" id="button-menos" onClick={decrementar}>-</button>
                <span class="input-group-text">{cantProducto}</span>
                <button className="btn btn-outline-success" type="button" id="button-mas" onClick={incrementar}>+</button>
            </div>
            <button className="btn btn-success" onClick={agregarAlCarrito}>Agregar al Carrito</button>
            
        </>
    )
}

export default ItemCount