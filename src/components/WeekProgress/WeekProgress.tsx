import React from "react";
import { Steps, Popover } from "antd";
import IconDot from "../Icons/IconDot";
import * as S from "./WeekProgress.style";

interface Props {
  progressStatus?: number;
}

const { Step } = Steps;
const MAX_WEEK_AMOUNT = 12;

const WeekProgress = ({ progressStatus }: Props) => {
  return (
    <S.FlexContainer>
      <p>YOUR 12 WEEK PROGRESS</p>
      <S.StyledSteps current={progressStatus} progressDot={IconDot}>
        {Array.from(Array(MAX_WEEK_AMOUNT)).map((el, index) => (
          <Step key={index} />
        ))}
      </S.StyledSteps>
    </S.FlexContainer>
  );
};

export default WeekProgress;
