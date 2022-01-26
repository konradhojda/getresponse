import styled from "styled-components";
import Container from "../../components/Container/Container";

export const TaskContainer = styled(Container)``;

export const TopBar = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 33px;

  & > * {
    flex-grow: 1;
    width: 33%;
    display: flex;
    justify-content: center;
  }
`;
