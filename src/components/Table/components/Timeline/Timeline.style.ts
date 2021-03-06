import styled from "styled-components";

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  background: #e6e6e6;
`;

export const TimelineWorkout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  height: 35px;
  color: #828282;
`;

export const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px;
  width: 85px;
  border: 1px solid #d4d4d4;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 13px;
  color: #828282;

  &:first-of-type {
    margin-top: 50px;
  }

  &:last-of-type {
    margin-bottom: 35px;
  }
`;
