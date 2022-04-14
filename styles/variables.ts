import {css} from 'styled-components';

export const Color = {
  Primary: {
    PurpleGrad: 'linear-gradient(124.78deg, #6651E5 0%, #B651E5 100%)',
    Purple_60: '#5241B7',
    Purple_50: '#6651E5',
    Purple_20: '#E0DCFA',
    Purple_10: '#F0EEFC',
  },
  Gray: {
    Gray_100: '#0A101A',
    Gray_5: '#F3F3F4',
  },
  GrayAlpha: {
    GrayAlpha_80: 'rgba(10, 16, 26, 0.8)',
    GrayAlpha_60: 'rgba(10, 16, 26, 0.6)',
    GrayAlpha_24: 'rgba(10, 16, 26, 0.24)',
    GrayAlpha_10: 'rgba(10, 16, 26, 0.1)',
    GrayAlpha_5: 'rgba(10, 16, 26, 0.05)',
  },
  White: {
    White_100: '#FFFFFF',
  },
  Red: {
    Red_100: '#B94249',
    Red_90: '#C0555B',
    Red_5: '#F8ECED',
  },
  Thirdparty: {
    LineGreen: '#06C755',
  },
} as const;

export const Radius = {
  Small: '4px',
  Medium: '8px',
  Large: '40px',
  X_Large: '60px',
} as const;

export const Depth = {
  Header: 100,
  Modal: 200,
  Menu: 300,
} as const;

export const Shadow = {
  Elevation_8: '0px 2px 8px rgba(0, 0, 0, 0.16)',
  Elevation_16: '0px 2px 16px rgba(0, 0, 0, 0.08)',
} as const;

export type TextAlign = 'left' | 'center' | 'right' | 'justify';

export type FontWeight = 'normal' | 'bold';

export type Alignment =
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'baseline'
  | 'stretch';

export const FontFamily = {
  Default:
    "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Meiryo, sans-serif",
};

export const Typography = {
  /**
   * font-size: 32px
   */
  Default_Dense_32: css`
    letter-spacing: 0.12em;
    font-size: 2rem;
    font-family: ${FontFamily.Default};
    line-height: 1;
  `,
  /**
   * font-size: 24px
   */
  Default_Dense_24: css`
    letter-spacing: 0.12em;
    font-size: 1.5rem;
    font-family: ${FontFamily.Default};
    line-height: 1;
  `,
  /**
   * font-size: 20px
   */
  Default_Dense_20: css`
    letter-spacing: 0.12em;
    font-size: 1.25rem;
    font-family: ${FontFamily.Default};
    line-height: 1;
  `,
  /**
   * font-size: 18px
   */
  Default_Dense_18: css`
    letter-spacing: 0.12em;
    font-size: 1.125rem;
    font-family: ${FontFamily.Default};
    line-height: 1;
  `,
  /**
   * font-size: 16px
   */
  Default_Dense_16: css`
    letter-spacing: 0.12em;
    font-size: 1rem;
    font-family: ${FontFamily.Default};
    line-height: 1;
  `,
  /**
   * font-size: 14px
   */
  Default_Dense_14: css`
    letter-spacing: 0.12em;
    font-size: 0.875rem;
    font-family: ${FontFamily.Default};
    line-height: 1;
  `,
  /**
   * font-size: 12px
   */
  Default_Dense_12: css`
    letter-spacing: 0.12em;
    font-size: 0.75rem;
    font-family: ${FontFamily.Default};
    line-height: 1;
  `,
  /**
   * font-size: 10px
   */
  Default_Dense_10: css`
    letter-spacing: 0.12em;
    font-size: 0.625rem;
    font-family: ${FontFamily.Default};
    line-height: 1;
  `,
  /**
   * font-size: 32px
   */
  Default_Normal_32: css`
    letter-spacing: 0.12em;
    font-size: 2rem;
    font-family: ${FontFamily.Default};
    line-height: 1.5;
  `,
  /**
   * font-size: 24px
   */
  Default_Normal_24: css`
    letter-spacing: 0.12em;
    font-size: 1.5rem;
    font-family: ${FontFamily.Default};
    line-height: 1.5;
  `,
  /**
   * font-size: 20px
   */
  Default_Normal_20: css`
    letter-spacing: 0.12em;
    font-size: 1.25rem;
    font-family: ${FontFamily.Default};
    line-height: 1.5;
  `,
  /**
   * font-size: 18px
   */
  Default_Normal_18: css`
    letter-spacing: 0.12em;
    font-size: 1.125rem;
    font-family: ${FontFamily.Default};
    line-height: 1.5;
  `,
  /**
   * font-size: 16px
   */
  Default_Normal_16: css`
    letter-spacing: 0.12em;
    font-size: 1rem;
    font-family: ${FontFamily.Default};
    line-height: 1.5;
  `,
  /**
   * font-size: 14px
   */
  Default_Normal_14: css`
    letter-spacing: 0.12em;
    font-size: 0.875rem;
    font-family: ${FontFamily.Default};
    line-height: 1.5;
  `,
  /**
   * font-size: 12px
   */
  Default_Normal_12: css`
    letter-spacing: 0.12em;
    font-size: 0.75rem;
    font-family: ${FontFamily.Default};
    line-height: 1.5;
  `,
  /**
   * font-size: 10px
   */
  Default_Normal_10: css`
    letter-spacing: 0.12em;
    font-size: 0.625rem;
    font-family: ${FontFamily.Default};
    line-height: 1.5;
  `,
  /**
   * font-size: 32px
   */
  Default_Comfort_32: css`
    letter-spacing: 0.12em;
    font-size: 2rem;
    font-family: ${FontFamily.Default};
    line-height: 2;
  `,
  /**
   * font-size: 24px
   */
  Default_Comfort_24: css`
    letter-spacing: 0.12em;
    font-size: 1.5rem;
    font-family: ${FontFamily.Default};
    line-height: 2;
  `,
  /**
   * font-size: 20px
   */
  Default_Comfort_20: css`
    letter-spacing: 0.12em;
    font-size: 1.25rem;
    font-family: ${FontFamily.Default};
    line-height: 2;
  `,
  /**
   * font-size: 18px
   */
  Default_Comfort_18: css`
    letter-spacing: 0.12em;
    font-size: 1.125rem;
    font-family: ${FontFamily.Default};
    line-height: 2;
  `,
  /**
   * font-size: 16px
   */
  Default_Comfort_16: css`
    letter-spacing: 0.12em;
    font-size: 1rem;
    font-family: ${FontFamily.Default};
    line-height: 2;
  `,
  /**
   * font-size: 14px
   */
  Default_Comfort_14: css`
    letter-spacing: 0.12em;
    font-size: 0.875rem;
    font-family: ${FontFamily.Default};
    line-height: 2;
  `,
  /**
   * font-size: 12px
   */
  Default_Comfort_12: css`
    letter-spacing: 0.12em;
    font-size: 0.75rem;
    font-family: ${FontFamily.Default};
    line-height: 2;
  `,
  /**
   * font-size: 10px
   */
  Default_Comfort_10: css`
    letter-spacing: 0.12em;
    font-size: 0.625rem;
    font-family: ${FontFamily.Default};
    line-height: 2;
  `,
} as const;
