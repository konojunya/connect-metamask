import styled, {FlattenSimpleInterpolation} from 'styled-components';
import {Color, TextAlign, Typography} from '../../../styles/variables';

const Wrapper = styled.span<{
  block: boolean;
  color: string;
  align: TextAlign;
  bold: boolean;
  typography: TypographyViewPort;
}>`
  display: ${({block}): string => (block ? 'block' : 'inline-block')};
  color: ${({color}): string => color};
  text-align: ${({align}): string => align};
  font-weight: ${({bold}): string => (bold ? 'bold' : 'normal')};
  ${({typography}): FlattenSimpleInterpolation =>
    typography.mobile as FlattenSimpleInterpolation}
`;

interface TypographyViewPort {
  mobile?: FlattenSimpleInterpolation;
}

export type Props = React.HTMLAttributes<HTMLElement> & {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  block?: boolean;
  bold?: boolean;
  color?: string;
  align?: TextAlign;
  typography?: TypographyViewPort;
  children?: React.ReactNode;
};

export const Text: React.VFC<Props> = ({
  block,
  color,
  align,
  bold,
  typography,
  children,
  ...rest
}) => (
  <Wrapper
    {...rest}
    block={block as boolean}
    color={color}
    align={align as TextAlign}
    bold={bold as boolean}
    typography={typography as TypographyViewPort}
  >
    {children}
  </Wrapper>
);

Text.defaultProps = {
  as: 'span',
  block: false,
  bold: false,
  color: Color.Gray.Gray_100,
  align: 'left',
  typography: {mobile: Typography.Default_Normal_14},
};
