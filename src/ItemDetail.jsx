


const ItemDetail = ({nombre,precio,stock,img,juego,categoria}) =>{

    return(
        
     
        <div className="card p-2">
            <img src={require(`${img}`)} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">PRECIO: ${precio}</p>
                
                <p className="card-text">Tipo juego: {categoria}</p>
                
                <p className="card-text">Juego: {juego}</p>
                <p className="card-text"><small className="text-muted">STOCK: {stock}</small></p>
       
            </div>
        </div>
      

    )
}

export default ItemDetail