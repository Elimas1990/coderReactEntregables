import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from './firebaseConf';
import { Timestamp } from "@firebase/firestore";

const saveOrder = async (cart,prod) => {

    let total=0
    let items=[]
    cart.map(async (item)=>{
        const producto =prod.find(producto => producto.id === item.id);
        total+=producto.precio*item.cant
        let obj={id:producto.id,title:producto.nombre,price:producto.precio,cant:item.cant}
        items.push(obj)
        await updateDoc(doc(db,"products",producto.id),{stock:producto.stock-item.cant})
    })
    const obj={
        buyer:{name:"Comprador",phone:44444444,email:"comprador@comprador.com.ar"},
        item:items,
        date: Timestamp.fromDate(new Date()),
        total: total
    }
    return await addDoc(collection(db,'orders'),obj)
}
export default saveOrder