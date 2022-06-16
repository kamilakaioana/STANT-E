import styled from "styled-components";
import HeartRedIcon from "../../assets/icon/heartRed.svg";
import HeartGrayIcon from "../../assets/icon/heartGray.svg";

type IcolorSelected = {
  selected?: boolean;
};

export const HeartIconRed = styled.img.attrs({
  src: HeartRedIcon,
})<IcolorSelected>`
  height: 24px;
  width: 24px;
  margin-right: 8px;
  align-self: center;
`;

export const HeartIconGray = styled.img.attrs({
  src: HeartGrayIcon,
})<IcolorSelected>`
  height: 24px;
  width: 24px;
  margin-right: 8px;
  align-self: center;
`;
