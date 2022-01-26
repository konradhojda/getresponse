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

export const WeekButton = styled.button`
  padding: 13px 8px;
  background: #fff;
  border-radius: 5px;
  border: 1px solid #c0c0c0;
  cursor: pointer;
  &:disabled {
    background: #e6e6e6;
    cursor: not-allowed;
  }
`;

export const WeekContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CurrentWeek = styled.div`
  margin: 0 50px;
`;
