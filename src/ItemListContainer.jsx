import data from './data'

const ItemListContainer = ()=>{
    return(
        <>
            <h1>Listado Productos</h1>
            {
                data.forEach(element => {
                    console.log(element)
                })
            }
        </>
    )
}

export default ItemListContainer