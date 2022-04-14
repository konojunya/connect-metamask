import {Color} from '../../../styles/variables';

export type ButtonColor = 'primary' | 'secondary' | 'grad' | 'error';

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
      background: Color.Primary.Purple_50,
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
      background: Color.White.White_100,
      color: Color.GrayAlpha.GrayAlpha_80,
      border: Color.GrayAlpha.GrayAlpha_10,
    },
  },
  grad: {
    normal: {
      background: Color.Primary.PurpleGrad,
      color: Color.White.White_100,
    },
    hover: {
      background: Color.Primary.PurpleGrad,
      color: Color.White.White_100,
    },
  },
  error: {
    normal: {
      background: Color.Red.Red_100,
      color: Color.White.White_100,
    },
    hover: {
      background: Color.Red.Red_90,
      color: Color.White.White_100,
    },
  },
};
