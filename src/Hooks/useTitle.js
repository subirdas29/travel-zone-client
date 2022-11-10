import { useEffect } from "react";


const useTitle = title =>
{
    useEffect(()=>{
        document.title = `${title} - Travel Zone`;
    },[title])
} 

export default useTitle;