const CartItem = ({producto,cant,limpiarArticulo}) =>{

    if(producto){
        return ( 
            <div className="card my-3" >
                <div className="row g-0">
                    <div className="col-md-4 text-center">
                    <img src={require(`${producto?.img}`)} className="img-fluid rounded-start img-cart" />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{producto?.nombre}</h5>
                        <div className="row">
                            <div className="col">
                                <p>Tipo de Juego: {producto?.tipo_juego.tipo}</p>
                                <p>Juego: {producto?.tipo_juego.nombre}</p>
                                <p>Precio unitario: {producto?.precio}</p>
                            </div>
                            <div className="col">
                                <p>Cantidad de articulos: {cant?.cant}</p>
                                <p>Subtotal: {cant?.cant*producto?.precio}</p>
                                <p><button className="btn btn-danger" onClick={()=>{limpiarArticulo(producto?.id)}}><i className="fa fa-trash"></i></button></p>
                            </div>
                        </div>
        
                    </div>
                    </div>
                </div>
            </div>
        )
    }else{
        return <></>
    }
    
/*
<div className="card mb-3" >
<div className="row g-0">
    <div className="col-md-4">
    <img src={require(`${producto?.img}`)} className="img-fluid rounded-start" />
    </div>
    <div className="col-md-8">
    <div className="card-body">
        <h5 className="card-title">{producto?.nombre}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">{cant?.cant}</small></p>
    </div>
    </div>
</div>
</div>*/
    
}
export default CartItem