import {Color} from '../../../styles/variables';

export type ButtonColor = 'primary' | 'secondary' | 'outline';

type ButtonColorStyle = {
  normal: {
    background: string;
    color: string;
    border?: string;
  };
  hover: {
    background?: string;
    color?: string;
    border?: string;
  };
};

export const colorMap: Record<ButtonColor, ButtonColorStyle> = {
  primary: {
    normal: {
      background: Color.Primary.Purple_50,
      color: Color.White.White_100,
    },
    hover: {
      background: Color.Primary.Purple_60,
      color: Color.White.White_100,
    },
  },
  secondary: {
    normal: {
      background: Color.White.White_100,
      color: Color.GrayAlpha.GrayAlpha_80,
      border: Color.GrayAlpha.GrayAlpha_10,
    },
    hover: {
      background: Color.GrayAlpha.GrayAlpha_5,
      color: Color.GrayAlpha.GrayAlpha_80,
      border: Color.GrayAlpha.GrayAlpha_10,
    },
  },
  outline: {
    normal: {
      background: Color.White.White_100,
      color: Color.Primary.Purple_50,
      border: Color.Primary.Purple_50,
    },
    hover: {
      background: Color.Primary.Purple_10,
      color: Color.Primary.Purple_50,
      border: Color.Primary.Purple_50,
    },
  },
};
