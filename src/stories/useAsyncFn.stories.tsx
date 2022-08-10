import useAsyncFn from "../hooks/useAsyncFn"
export default {
  title: 'hook/useAsyncFn',
  component: useAsyncFn,
}

const asyncReturnValue = () => {
  return new Promise((reslove:any) => {
    setTimeout(()=>{
      reslove('Success');
    },1000)
  });
};

export const Default = () => {
  const [state, callback] :any = useAsyncFn(async () => {
    return await asyncReturnValue();
  },[]);

  return (
    <>
      <div>테스트</div>
      <div>{JSON.stringify(state)}</div>
      <button onClick={callback} disabled={state.isLoading}>비동기호출</button>
    </>
  );
}