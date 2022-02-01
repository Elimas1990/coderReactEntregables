import Item from "./Item"


const ItemList = ({id,nombre,precio,stock,img}) =>{
    
    return(
        <Item id={id} nombre={nombre} precio={precio} stock={stock} img={img}/>
    )
}

export default ItemList
