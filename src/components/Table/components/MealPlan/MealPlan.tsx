import React from "react";
import { Meal, SingleItem } from "../../../../utils/model/Item";
import * as S from "./MealPlan.style";

interface Props {
  data: SingleItem[];
}

const MealPlan = ({ data }: Props) => {
  const onCLick = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.classList.toggle("active");
  };

  return (
    <S.MealPlanContainer>
      {data.map((item: SingleItem) => (
        <S.MealPlanColumnContainer
          onClick={onCLick}
          className={item.current ? "active" : ""}
        >
          <S.MealPlanItem className="week">{`Week ${item.id}`}</S.MealPlanItem>
          {item.meals &&
            item.meals.map((f: Meal, index) => (
              <S.MealPlanItem key={index}>
                {f.name}
                {f.img && <img src={f.img} alt="img-description" />}
              </S.MealPlanItem>
            ))}
          {!item.meals && (
            <S.MealPlanLastDay>
              <S.LastDayIcon />
              <S.LastDayContent>GUILT-FREE DAY</S.LastDayContent>
            </S.MealPlanLastDay>
          )}
          {item.dietType && <S.DietType>{item.dietType}</S.DietType>}
          {item.dietType && (
            <S.DietDone>
              <S.DumbbellIcon className={item.dietDone ? "active" : ""} />
              {item.dietDone && <S.CheckedIcon />}
            </S.DietDone>
          )}
        </S.MealPlanColumnContainer>
      ))}
    </S.MealPlanContainer>
  );
};

export default MealPlan;
