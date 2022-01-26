import React from "react";
import * as S from "./Footer.style";
import * as F from "./FooterElement/FooterElements.style";
import FooterElement from "./FooterElement/FooterElement";

const Footer = () => {
  return (
    <S.FooterContainer>
      <FooterElement
        headline={"Running out of products?"}
        subHeadline={
          "Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."
        }
      >
        <F.FooterElementButtonContainer>
          <F.FooterElementButton>Buy now</F.FooterElementButton>
        </F.FooterElementButtonContainer>
      </FooterElement>
      <FooterElement
        headline={"Running out of products?"}
        subHeadline={
          "Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."
        }
      >
        <F.FooterElementButtonContainer>
          <F.FooterElementButton>iOs</F.FooterElementButton>
          <F.FooterElementButton>Android</F.FooterElementButton>
        </F.FooterElementButtonContainer>
      </FooterElement>
      <FooterElement
        headline={"Frequently Asked Questions"}
        subHeadline={
          "Lorem ipsum dolor sit amet, consect turadipiscing elit. Integer aliquet."
        }
      >
        <F.FooterElementButtonContainer>
          <F.FooterElementButton>Read FAQs</F.FooterElementButton>
        </F.FooterElementButtonContainer>
      </FooterElement>
    </S.FooterContainer>
  );
};

export default Footer;
