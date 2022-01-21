import { useState } from "react"

const ItemCount = ({stock}) =>{
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
                <span class="input-group-text">{cantProducto}</span>
                <button className="btn btn-outline-success" type="button" id="button-mas" onClick={incrementar}>+</button>
            </div>
            
        </>
    )
}

export default ItemCount