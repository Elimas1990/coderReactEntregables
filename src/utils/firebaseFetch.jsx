import { collection, connectFirestoreEmulator, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from './firebaseConf'

const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || ""
const firestoreFetch = async (filtro) =>{

    
    let querying=collection(db,"products");
    if(filtro.tipo){

        const queryCategoria =query(collection(db,"categoria"),where("nombre","==",capitalize(filtro.tipo).replaceAll('-',' ')));
        const datCategoria = await getDocs(queryCategoria);
        const categoriaRef=datCategoria.docs.map((item)=> {return item.ref});
        
        const queryJuegos =query(collection(db,"juegos"),where("categoria","==",categoriaRef[0]));
        const datJuego = await getDocs(queryJuegos);
        const juegoRef=datJuego.docs.map((item)=> {return item.ref});

        querying =query(collection(db,"products"),where("juego","in",juegoRef));
    }
    
    const querySnapshot = await getDocs(querying);

    const dataFromFirebase=querySnapshot.docs.map(async (doc)=>{
        const d=doc.data()
        const prod={
            ... d, id:doc.id
        }
        if(d.juego){
            let refJuego=await getDoc(d.juego);
            Object.assign(prod,{juego:refJuego.data().nombre})

            let refCategoria = await getDoc(refJuego.data()?.categoria)
            Object.assign(prod,{categoria:refCategoria.data().nombre})
            
        }
        return prod
    
    })
    return await Promise.all(dataFromFirebase)

}
export default firestoreFetch