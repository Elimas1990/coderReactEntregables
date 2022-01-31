import CustomFetch from './utils/CustomFetch'
import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = ()=>{
    const [productos,setProductos] = useState([])
    const tipo=useParams()
    
    useEffect(()=>{
        CustomFetch(tipo)
            .then(resultado=> setProductos(resultado))
            .catch(err => console.log(err))
    },[tipo])
    return(
        <div className="container">
            <div className="d-flex justify-content-center row row-cols-1 row-cols-md-4 row-cols-xl-4 g-4 m-4">
                {
                    productos.map((item,index)=>{
                        return (<ItemList 
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
        </div>
    )
}

export default ItemListContainer