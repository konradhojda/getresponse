import React from "react";
import * as S from "./Header.style";
import Container from "../Container/Container";
import Menu from "./Menu/Menu";
import UserInfo from "./UserInfo/UserInfo";

interface Props {
  userName?: string;
}

const menuItems = [
  {
    href: "#",
    content: "Dashboard",
    linkClassName: "active",
  },
  {
    href: "#",
    content: "Recipes",
  },
  {
    href: "#",
    content: "Challenge",
  },
];

const Header = ({ userName }: Props) => {
  return (
    <S.Header>
      <S.StyledContainer>
        <Menu items={menuItems} />
        <UserInfo userName={userName} />
      </S.StyledContainer>
    </S.Header>
  );
};

export default Header;
