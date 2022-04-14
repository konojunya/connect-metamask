import styled, {FlattenSimpleInterpolation} from 'styled-components';
import {Color, Radius, Typography} from '../../../styles/variables';
import {ButtonColor, colorMap} from './color-map';
import Link, {LinkProps} from 'next/link';

interface TypographyViewPort {
  mobile?: FlattenSimpleInterpolation;
}

interface WrapperProps {
  typography: TypographyViewPort;
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
}

const ButtonWrapper = styled.button<WrapperProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  border: ${(props): string | number =>
    props.normal.border != null ? `1px solid ${props.normal.border}` : 0};
  border-radius: ${Radius.Small};
  background: ${(props): string => props.normal.background};
  color: ${(props): string => props.normal.color};
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  ${(props): FlattenSimpleInterpolation | undefined => props.typography.mobile}

  &:hover {
    border: ${(props): string | number =>
      props.hover.border != null ? `1px solid ${props.hover.border}` : 0};
    background: ${(props): string | undefined => props.hover.background};
    color: ${(props): string | undefined => props.hover.color};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${Color.White.White_100},
      0 0 0 4px ${Color.Primary.Purple_50};
  }

  &:disabled,
  &[aria-disabled='true'] {
    background: ${Color.GrayAlpha.GrayAlpha_24};
  }
`;

const Anchor = styled.a`
  text-decoration: none;
`;

export type Props = React.ComponentPropsWithoutRef<'button'> & {
  children: React.ReactNode;
  color?: ButtonColor;
  typography?: TypographyViewPort;
  href?: LinkProps['href'];
  target?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const BaseButton: React.VFC<Props> = ({
  color = 'primary',
  typography = {mobile: Typography.Default_Dense_14},
  children,
  ...rest
}) => {
  const colorStyle = colorMap[color as ButtonColor];

  return (
    <ButtonWrapper
      {...rest}
      normal={colorStyle.normal}
      hover={colorStyle.hover}
      typography={typography as TypographyViewPort}
    >
      {children}
    </ButtonWrapper>
  );
};

export const Button: React.VFC<Props> = ({href, target, ...rest}) => {
  if (href != null) {
    return (
      <Link href={href} passHref>
        <Anchor target={target}>
          <BaseButton {...rest} />
        </Anchor>
      </Link>
    );
  }

  return <BaseButton {...rest} />;
};
