import getItem from './utils/getItem'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ()=>{
    const [producto,setProducto] = useState([])
    const id=useParams()
    useEffect(()=>{
        getItem(id)
            .then(resultado=> {
                setProducto(resultado)})
            .catch(err => console.log(err))
    },[])
    return(
        
        <div className="container">
            {
                producto.map((item,index)=>{
                    return (<ItemDetail 
                    key={index}
                    id={item.id}
                    img={item.img}
                    nombre={item.nombre}
                    precio={item.precio} 
                    stock={item.stock} 
                    tipo_juego={item.tipo_juego} />
                    )

                })
            }
        </div>

    )
}

export default ItemDetailContainer