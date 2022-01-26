import ItemCount from "./ItemCount"

const ItemList = ({nombre,precio,stock,img}) =>{
    
    return(
        <>
            <div className="col">
                <div className="card">
                    <img src={require(`${img}`)} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{nombre}</h5>
                        <p className="card-text">PRECIO: ${precio}</p>
                        <p className="card-text"><small className="text-muted">STOCK: {stock}</small></p>
                        <p className="card-text"><ItemCount stock={stock} nombre={nombre} /></p>
                    </div>
                </div>
            </div>

        </>


    )
}

export default ItemList


/*<div classNameName="col-lg-3 wrapper-producto aos-init aos-animate" data-aos="fade-down">
<div classNameName="card-producto my-3"><img classNameName="rounded img-producto shadow p-3" src={img} alt="" />
    <div classNameName="content-producto p-2">
        <div classNameName="content-row producto_info">
            <p classNameName="text-center fw-bold text-decoration-underline">{nombre}</p>
            <p classNameName="mb-1">Precio: ${precio}</p>
            <p classNameName="m-0">En stock: {stock}</p>
        </div>
        <button classNameName="btn btn-purple btn-carrito float-end">Agregar <i classNameName="fas fa-cart-plus"></i></button>
    </div>
</div>
</div>*/