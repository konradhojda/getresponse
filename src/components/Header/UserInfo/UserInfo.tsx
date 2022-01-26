import React from "react";
import * as S from "./UserName.style";
import ChevronDownIcon from "../../Icons/ChevronDownIcon";

interface Props {
  userName?: string;
  userImg?: string;
}

const UserInfo = ({ userName, userImg }: Props) => {
  return (
    <S.UserInfoContainer>
      <img src={userImg} alt="alt" />
      <S.UserName>{userName}</S.UserName>
      <ChevronDownIcon />
    </S.UserInfoContainer>
  );
};

export default UserInfo;
