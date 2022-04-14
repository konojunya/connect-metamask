import {useCallback} from 'react';
import styled from 'styled-components';
import {Text} from '../Text';
import {Typography, Color} from '../../../styles/variables';

const Wrapper = styled.button<{active: boolean}>`
  height: 30px;
  border: none;
  background: transparent;
  border-bottom: ${(props): string =>
    props.active ? `3px solid ${Color.Primary.Purple_50}` : `none;`};
`;

export interface TabProps {
  id: string;
  content: React.ReactNode;
}

export interface Props {
  id: string;
  tab: TabProps;
  as?: keyof JSX.IntrinsicElements;
  onClick?: (id: string) => void;
  active: boolean;
  children: React.ReactNode;
}

export const Item: React.VFC<Props> = ({id, as, onClick, active, children}) => {
  const handleClick = useCallback(() => {
    onClick?.(id);
  }, [id, onClick]);

  const color = active ? Color.Primary.Purple_50 : Color.GrayAlpha.GrayAlpha_24;

  return (
    <li>
      <Wrapper onClick={handleClick} active={active}>
        <Text
          bold
          as={as}
          color={color}
          typography={{mobile: Typography.Default_Dense_14}}
        >
          {children}
        </Text>
      </Wrapper>
    </li>
  );
};
