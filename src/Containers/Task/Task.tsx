import React, { useState } from "react";
import * as S from "../Task/Task.style";
import WeekProgress from "../../components/WeekProgress/WeekProgress";
import Table from "../../components/Table/Table";
import { data, hours } from "../../data";

interface Props {}

const Task = () => {
  const [currentWeekend, setCurrentWeekend] = useState<number>(1);

  const goToPrevWeekend = () => {
    if (currentWeekend === 1) {
      return;
    }
    setCurrentWeekend(currentWeekend - 1);
  };

  const goToNextWeekend = () => {
    if (currentWeekend === 4) {
      return;
    }
    setCurrentWeekend(currentWeekend + 1);
  };

  return (
    <S.TaskContainer>
      <S.TopBar>
        <WeekProgress progressStatus={6} />
        <div>
          <button onClick={goToPrevWeekend} disabled={currentWeekend === 1}>
            -
          </button>
          {currentWeekend}
          <button onClick={goToNextWeekend} disabled={currentWeekend === 4}>
            +
          </button>
        </div>
        <div>Protein options</div>
      </S.TopBar>
      <Table data={data} hours={hours} />
    </S.TaskContainer>
  );
};

export default Task;
