import React, { PropsWithChildren } from "react";
import * as S from "./FooterElements.style";

interface Props {
  headline: string;
  subHeadline: string;
}

const FooterElement: React.FC<PropsWithChildren<Props>> = ({
  children,
  headline,
  subHeadline,
}) => (
  <S.FooterElementsContainer>
    <S.FooterElementsHeadline>{headline}</S.FooterElementsHeadline>
    <S.FooterElementSubHeadline>{subHeadline}</S.FooterElementSubHeadline>
    {children}
  </S.FooterElementsContainer>
);

export default FooterElement;
