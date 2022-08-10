import useAsync from "../hooks/useAsync"
export default {
  title: 'hook/useAsync',
  component: useAsync,
}

const asyncReturnValue = () => {
  return new Promise((reslove:any) => {
    setTimeout(()=>{
      reslove('Success');
    },1000)
  });
};

export const Default = () => {
  const state :any = useAsync(async () => {
    return await asyncReturnValue();
  },[]);

  return <>
    <div>테스트</div>
    <div>{JSON.stringify(state)}</div>
  </>
}