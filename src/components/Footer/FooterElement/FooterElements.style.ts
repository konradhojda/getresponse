import styled from "styled-components";

export const FooterElementsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  padding-right: 70px;
`;

export const FooterElementsHeadline = styled.h3``;

export const FooterElementSubHeadline = styled.p``;

export const FooterElementButtonContainer = styled.div`
  display: flex;
`;

export const FooterElementButton = styled.a`
  position: relative;
  padding: 10px;
  border: 1px solid #b8b8b8;
  background-color: #ffffff;
  border-radius: 5px;
  color: #a4a4a4;
  display: inline-block;

  &:after {
    content: "\u203a";
    display: inline-block;
    padding-left: 10px;
    font-size: 20px;
    line-height: 10px;
  }

  &:nth-of-type(2) {
    margin-left: 14px;
  }
`;
