import styled from "styled-components";

export const AppMenu = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  margin-left: 120px;
  margin-bottom: 0;
  height: 100%;
  align-items: center;
  border-left: 1px solid #efefef;
`;

export const MenuItem = styled.li``;

export const MenuLink = styled.a`
  margin: 0 30px;
  &.active {
    color: #ff801a;
  }
`;
