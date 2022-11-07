import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
export const Header = styled.div`
  width: 541px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Circle = styled.div`
  width: 52px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(47, 47, 60, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 1.8rem;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  margin-left: 16px;
`;
