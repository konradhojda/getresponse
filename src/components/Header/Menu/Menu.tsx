import React from "react";
import * as S from "./Menu.style";

export interface Props {
  items: IItem[];
  className?: string;
}

export interface IItem {
  href: string;
  content: React.ReactNode;
  linkClassName?: string;
}

const Menu = ({ items, className }: Props) => (
  <S.AppMenu>
    {items.map((item, index) => (
      <S.MenuItem key={index}>
        <S.MenuLink
          rel="noopener noreferrer"
          href={item.href}
          className={item.linkClassName}
        >
          {item.content}
        </S.MenuLink>
      </S.MenuItem>
    ))}
  </S.AppMenu>
);

export default Menu;
