import ItemCount from "./ItemCount"

const Item = ({nombre,precio,stock,img}) =>{
    
    return(
        
        <div className="col">
            <div className="card">
                <img src={require(`${img}`)} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">PRECIO: ${precio}</p>
                    <p className="card-text"><small className="text-muted">STOCK: {stock}</small></p>
                    <div className="card-text"><ItemCount stock={stock} nombre={nombre} /></div>
                </div>
            </div>
        </div>

    )
}

export default Item