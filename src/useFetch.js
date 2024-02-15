import { useEffect, useState } from "react";

const useFetch=(url)=>{

    const [data,setData]=useState(null);
    const [isPending,setIsPEnding]=useState(true);
    const[error,setError]=useState(null);

    useEffect(()=>{
        const abortCont=new AbortController();
        setTimeout(()=>{
            fetch(url,{signal:abortCont.signal})
            .then(res=>{
                if(!res.ok){
                    throw Error("cannot fetch data!!");
                }
                return res.json();
            })
            .then(data=>{
                console.log(data);
                setData(data);
                setIsPEnding(false)
                setError(null);
            })
            .catch(err=>{
                if(err.name==='AbortError'){
                    console.log('aboretd')
                }else{
                setError(err.message);
                setIsPEnding(false);
                }
            })
        },100)
        return ()=> abortCont.abort();
      
    },[url])
    return{data,isPending,error}
}

export default useFetch;