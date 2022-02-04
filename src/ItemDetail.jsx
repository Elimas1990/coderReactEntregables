import ItemCount from "./ItemCount"


const ItemDetail = ({nombre,precio,stock,img,tipo_juego}) =>{
    
    return(
        
     
        <div className="card p-2">
            <img src={require(`${img}`)} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">PRECIO: ${precio}</p>
                
                <p className="card-text">Tipo juego: {tipo_juego.tipo}</p>
                
                <p className="card-text">Juego: {tipo_juego.nombre}</p>
                <p className="card-text"><small className="text-muted">STOCK: {stock}</small></p>
                <ItemCount/>
            </div>
        </div>
      

    )
}

export default ItemDetail