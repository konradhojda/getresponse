import styled from "styled-components";
import Container from "../Container/Container";

export const Header = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.13);
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
