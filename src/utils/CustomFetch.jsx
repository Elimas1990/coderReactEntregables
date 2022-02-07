import data from './data'
const is_ok=true
const customFetch = (filtro) =>{
    return new Promise((res,rej)=>{
        if(is_ok){
            const filtrado = data.filter(item => {
                
                if(filtro?.tipo){
             
                    if(filtro?.juego){
                        return item.tipo_juego.nombre.replaceAll(' ','-').toLowerCase() === filtro.juego.toLowerCase()
                    }
                    return item.tipo_juego.tipo.replaceAll(' ','-').toLowerCase() === filtro.tipo.toLowerCase()
                }else{
                    return item
                }
                
            })
            
 
            res(filtrado);
     
            
        }else{
            rej("error");
        }
    })
}

export default customFetch