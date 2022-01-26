import React from "react";
import * as S from "./Container.style";

interface Props {
  className?: string;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return <S.Container className={className}>{children}</S.Container>;
};

export default Container;
