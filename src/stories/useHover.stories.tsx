import useHover from "../hooks/useHover";
import styled from "@emotion/styled";

export default {
  title : "Hook/useHover",
  component: useHover
}

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`

export const Default = () => {
  const [ref, hover] :any = useHover();

  return (
    <>
      <Box ref={ref}/>
      {hover ? "True" : "False"}
    </>
  );
}