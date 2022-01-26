import React from "react";
import * as S from "./Table.style";
import Timeline from "./components/Timeline/Timeline";
import MealPlan from "./components/MealPlan/MealPlan";
import { SingleItem } from "../../utils/model/Item";
import { SingleHours } from "../../utils/model/Hours";

interface Props {
  data: SingleItem[];
  hours: SingleHours[];
}

const Table = ({ data, hours }: Props) => {
  return (
    <S.Table>
      <Timeline hours={hours} />
      <MealPlan data={data} />
    </S.Table>
  );
};

export default Table;
