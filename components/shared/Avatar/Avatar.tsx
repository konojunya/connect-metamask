import styled from 'styled-components';
import Image, {ImageProps} from 'next/image';

const Wrapper = styled.div<{border?: string; size: number}>`
  width: ${(props): number => props.size}px;
  height: ${(props): number => props.size}px;
  overflow: hidden;
  border-radius: 50%;
  ${(props): string | false =>
    props.border != null && `border: 2px solid ${props.border};`}
`;

export type Props = ImageProps & {
  size: number;
  border?: string;
};

export const Avatar: React.VFC<Props> = ({size, border, ...rest}) => {
  return (
    <Wrapper border={border} size={size}>
      <Image layout="fixed" {...rest} width={size} height={size} />
    </Wrapper>
  );
};
