import {  useState } from "react"

const ItemCount = ({stock,onAdd}) =>{

    const [cantProducto, setCantProducto] = useState(1)

    const incrementar= ()=>{
        if(cantProducto < stock) setCantProducto(cantProducto+1);
    }
    const decrementar= ()=>{
        if(cantProducto > 1) setCantProducto(cantProducto-1);
    }
    
    return(
        <>
            <div className="input-group mb-3 w-100">
                <button className="btn btn-outline-danger" type="button" id="button-menos" onClick={decrementar}>-</button>
                <span className="input-group-text">{cantProducto}</span>
                <button className="btn btn-outline-success" type="button" id="button-mas" onClick={incrementar}>+</button>
            </div>
            <button className="btn btn-success" onClick={()=>{onAdd(cantProducto)}}>Agregar al Carrito</button>
            
        </>
    )
}

export default ItemCount