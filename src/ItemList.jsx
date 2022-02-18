import Item from "./Item"


const ItemList = ({id,nombre,precio,stock,img,categoria,juego}) =>{
    
    return(
        <Item id={id} nombre={nombre} precio={precio} stock={stock} img={img} categoria={categoria} juego={juego}/>
    )
}

export default ItemList
