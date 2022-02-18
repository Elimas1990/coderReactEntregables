import getItem from './utils/getItem'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ()=>{
    const [producto,setProducto] = useState({})
    const id=useParams()
    useEffect(()=>{
        getItem(id)
            .then(resultado=> {
                setProducto(resultado)})
            .catch(err => console.log(err))
    },[id])
    return(
        
        <div className="container">
            {
                Object.keys(producto).length > 0 
                ?
                <ItemDetail 
                    id={producto.id}
                    img={producto.img}
                    nombre={producto.nombre}
                    precio={producto.precio} 
                    stock={producto.stock} 
                    juego={producto.juego}
                    categoria={producto.categoria} />
                : 
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                /*producto.map((item,index)=>{
                    return (<ItemDetail 
                    key={index}
                    id={item.id}
                    img={item.img}
                    nombre={item.nombre}
                    precio={item.precio} 
                    stock={item.stock} 
                    tipo_juego={item.tipo_juego} />
                    )

                })*/
            }
        </div>

    )
}

export default ItemDetailContainer