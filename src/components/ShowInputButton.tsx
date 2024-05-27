import React from "react";
import Button from "./Button";
import styled from "@emotion/styled";

interface Props {
  show: boolean;
  onClick: () => void;
}

const WrapStyle = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 1;
`;

const ShowInputButton = ({ show, onClick }: Props) => {
  return (
    <WrapStyle>
      <Button
        label={show ? "닫기" : "할 일 추가"}
        color={show ? undefined : "#304ffe"} //undefined가 아니면 오른쪽 색을 줘라
        onClick={onClick}
      />
    </WrapStyle>
  );
};

export default ShowInputButton;
