import Item from "./Item"


const ItemList = ({nombre,precio,stock,img}) =>{
    
    return(
        <Item nombre={nombre} precio={precio} stock={stock} img={img}/>
    )
}

export default ItemList
