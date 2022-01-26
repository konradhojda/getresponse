import styled from "styled-components";
import CheckIcon from "../../../Icons/CheckIcon";
import SmileIcon from "../../../Icons/SmileIcon";
import WorkoutIcon from "../../../Icons/WorkoutIcon";

export const MealPlanContainer = styled.div`
  display: flex;
`;

export const MealPlanItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90px;
  width: 126px;
  padding: 11px 10px 12px 12px;
  border-bottom: 1px solid #e9e9e9;
  &:nth-of-type(2) {
    border-top: 1px solid #e9e9e9;
  }
  &.week {
    height: 50px;
    border: none;
  }
`;

export const MealPlanLastDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  width: 125px;
  height: calc(100% - 50px);
`;

export const LastDayIcon = styled(SmileIcon)``;

export const CheckedIcon = styled(CheckIcon)`
  margin-left: 5px;
`;

export const DumbbellIcon = styled(WorkoutIcon)`
  &.active {
    path {
      fill: #ff801a;
    }
  }
`;

export const LastDayContent = styled.h2`
  font-size: 27px;
  margin: 0 0 28px 0;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  color: #c2c2c2;
  transform: rotateY(180deg) rotateX(180deg);
`;

export const DietDone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  background: #e6e6e6;
  border: 1px solid #d4d4d4;
`;

export const DietType = styled.div`
  background: #e6e6e6;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d4d4d4;
  border-top: none;
`;

export const MealPlanColumnContainer = styled.div`
  border: 1px solid #e9e9e9;
  &.active {
    border: 1px solid orange;
  }
`;
