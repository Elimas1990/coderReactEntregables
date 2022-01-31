import data from './data'
const is_ok=true
const getItem = (id) =>{
    return new Promise((res,rej)=>{
        if(is_ok){
            
            setTimeout(()=>{
                res(data.filter(item => item.id === parseInt(id.id)));
            },2000)
        }else{
            rej("error");
        }
    })
}

export default getItem