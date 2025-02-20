import styled from "styled-components";

export const ListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  list-style: none;
  width: 100%;
  padding: 24px 3%;
`;

export const Content = styled.div`
  margin-top: 4rem;
`;
