import { doc, getDoc } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import CartItem from "./CartItem"
import { CartContext } from "./context/CartContext"
import { db } from "./utils/firebaseConf"
import firestoreFetch from "./utils/firebaseFetch"
import saveOrder from "./utils/saveOrder"

const Cart = () =>{
    const test = useContext(CartContext)
    console.log(test)
    const [productos,setProductos] = useState([])
    useEffect(()=>{
        firestoreFetch({})
            .then(resultado=> setProductos(resultado))
            .catch(err => console.log(err))
    },[])

    const limpiarCarro = () =>{
        test.eliminarCarrito();
    }
    const limpiarArticulo = (id) =>{
        test.eliminarArticulo(id);
    }
    const generarOrden = () =>{
        const dat=saveOrder(test.productos,productos);
        dat.then(async ref=> {
            console.log(ref)
            const order=await getDoc(doc(db,"orders",ref.id))
            alert(JSON.stringify(order.data()))
        })
        limpiarCarro()
    }
    return (
        <>
            <div className="container">
                {
                    test.productos.length > 0 ?
                    <div className="row my-3">
                        <div className="col-9 text-center"><h2>Carrito de Compras</h2></div>
                        <div className="col-3"><button className="btn btn-danger float-end" onClick={limpiarCarro}>Limpiar Carrito <i className="fa fa-trash"></i></button></div>
                    </div> :
                    <div className="row mt-5">
                        <div className="col-12 text-center"><h2>Agregue productos al carrito</h2></div>
                    </div>
                }
                {
                    test.productos.map((item,index)=>{
                        const prod =productos.find(producto => producto.id === item.id);
                
                        return <CartItem producto={prod} cant={item} key={index} limpiarArticulo={limpiarArticulo}/>
                        
                    })
                }
                {
                    test.productos.length > 0 ?
                    <div className="row my-3">
                        <div className="col-9 text-center"><button className="btn btn-warning" onClick={generarOrden}>Comprar Articulos</button></div>    
                    </div>:<></>
                 
                }

            </div>
            
        </>
    )
}
export default Cart