import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  background: linear-gradient(62.93deg, #5496a8 19.68%, #b550b3 89.55%);

  width: 100%;

  background-attachment: fixed;
`;
