import data from './data'
import ItemList from './ItemList'

const ItemListContainer = ()=>{
    return(
        <>
            <div className="row row-cols-1 row-cols-md-4 row-cols-xl-4 g-4 m-4">
                {
                    data.map((item,index)=>{
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
            
            
           
           
        </>
    )
}

export default ItemListContainer