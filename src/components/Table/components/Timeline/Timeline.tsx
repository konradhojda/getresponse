import React from "react";
import * as S from "./Timeline.style";
import { SingleHours } from "../../../../utils/model/Hours";
import { TimelineWorkout } from "./Timeline.style";

interface Props {
  hours: SingleHours[];
  className?: string;
}

const Timeline: React.FC<Props> = ({ hours, className }) => {
  return (
    <S.Timeline>
      {hours.map((e: SingleHours) => (
        <S.TimelineItem>{e.value}</S.TimelineItem>
      ))}
      <S.TimelineWorkout>Workout</S.TimelineWorkout>
    </S.Timeline>
  );
};

export default Timeline;
