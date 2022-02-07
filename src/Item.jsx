import ItemCount from "./ItemCount"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";

const Item = ({id,nombre,precio,stock,img}) =>{
    const test = useContext(CartContext)
    const onAdd = (cant) =>{
        

        test.addProducto(id,cant)

    }
    
    return(
        
        <div className="col ">
            <div className="card">
                <div className="card-container">
                    <img src={require(`${img}`)} className="card-img-top" alt="..."/>
                    
                    <button className="btn btn-light"><Link to={`/item/${id}`}  className="text-dark">Info <i className="fas fa-info-circle"></i></Link></button>
                </div>
                
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">PRECIO: ${precio}</p>
                    <p className="card-text"><small className="text-muted">STOCK: {stock}</small></p>
                    <div className="card-text"><ItemCount stock={stock} onAdd={onAdd} /></div>
                </div>
            </div>
        </div>

    )
}

export default Item