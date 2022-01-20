const CartWidget = ()=>{
    return(
        <>
            <button type="button" className="btn btn-primary position-relative shadow" id="button-carrito" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <i className="fas fa-shopping-cart"></i> Total: $<span id="carrito_subtotal">0</span>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id="notificador_articulos">0</span>
            </button>
        </>
    )
}

export default CartWidget