import data from './data'
const is_ok=true
const customFetch = () =>{
    return new Promise((res,rej)=>{
        if(is_ok){
            setTimeout(()=>{
                res(data);
            },2000)
            
        }else{
            rej("error");
        }
    })
}

export default customFetch