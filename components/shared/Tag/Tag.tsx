import styled, {FlattenSimpleInterpolation} from 'styled-components';
import {Color, Radius, Typography} from '../../../styles/variables';

type TagColor = 'primary' | 'basic' | 'skelton';
type TagSize = 'sm' | 'md';

interface TagColorStyle {
  background: string;
  color: string;
}

const colorMap: Record<TagColor, TagColorStyle> = {
  primary: {
    background: Color.Primary.Purple_10,
    color: Color.Primary.Purple_50,
  },
  basic: {
    background: Color.GrayAlpha.GrayAlpha_5,
    color: Color.GrayAlpha.GrayAlpha_60,
  },
  skelton: {
    background: Color.White.White_100,
    color: Color.GrayAlpha.GrayAlpha_24,
  },
};

const sizeMap: Record<TagSize, number> = {
  sm: 22,
  md: 30,
};

const Wrapper = styled.span<{
  map: TagColorStyle;
  size: number;
  padding: string;
  typography: FlattenSimpleInterpolation;
}>`
  display: inline-flex;
  background: ${(props): string => props.map.background};
  color: ${(props): string => props.map.color};
  width: auto;
  height: ${(props): number => props.size}px;
  border-radius: ${Radius.Large};
  padding: ${(props): string => props.padding};
  font-weight: bold;
  ${(props): FlattenSimpleInterpolation => props.typography};
`;

export interface Props {
  size?: TagSize;
  color?: TagColor;
  children: string;
}

export const Tag: React.VFC<Props> = ({
  color = 'primary',
  size = 'md',
  children,
}) => {
  const padding = size === 'sm' ? '6px' : '8px 16px';
  const typography =
    size === 'sm' ? Typography.Default_Dense_10 : Typography.Default_Dense_14;

  return (
    <Wrapper
      map={colorMap[color]}
      size={sizeMap[size]}
      padding={padding}
      typography={typography}
    >
      {children}
    </Wrapper>
  );
};
