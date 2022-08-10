import { useEffect } from 'react';
import useAsyncFn from "./useAsyncFn"

const useAsync = (fn : any, deps : any) => {
  const [state, callback] : any = useAsyncFn(fn, deps);

  useEffect(()=>{
    callback();
  },[callback]);

  return state;
}

export default useAsync