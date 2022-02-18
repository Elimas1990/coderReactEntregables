import {  doc, getDoc } from 'firebase/firestore';


import { db } from './firebaseConf';
const is_ok=true
const getItem = async (id) =>{
 
 
    const docRef = doc(db, "products", id.id);
    const docSnap = await getDoc(docRef);

    const item =docSnap.data()

    const docJuego = await getDoc(docSnap.data().juego);
    Object.assign(item,{juego:docJuego.data().nombre})

    const docCategoria = await getDoc(docJuego.data().categoria);
    Object.assign(item,{categoria:docCategoria.data().nombre})

    return new Promise((res,rej)=>{
        if(is_ok){
            
            res(item)
        }else{
            rej("error");
        }

    })
    /*return new Promse((res,rej)=>{
        if(is_ok){
            
            setTimeout(()=>{
                res(data.filter(item => item.id === parseInt(id.id)));
            },2000)
        }else{
            rej("error");
        }
    })*/
}

export default getItem