import { useRef } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
const useAsyncFn = (fn :any, deps:any) => {

  const [state, setState] = useState({
    isLoading: false,
    value: '',
    error: ''
  });

  const lastCallId = useRef(0);

  const callback = useCallback((...args: any) => {
    const callId = ++lastCallId.current;
    if(!state.isLoading) {
      setState({...state, isLoading:true});
    }

    return fn(...args).then( (value: any)  => {
      setState({ ...state, value, isLoading: false});
      return value;
    }, (error:any) => {
      setState({ ...state, error, isLoading: false});
      return error;
    });
  }, deps);
  return [state, callback];
};

export default useAsyncFn;