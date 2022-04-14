import styled from 'styled-components';
import {Color, Radius} from '../../../styles/variables';
import {Text} from '../Text';

interface SelectedColor {
  text: string;
  background: string;
  border: string;
}

const Wrapper = styled.div<SelectedColor>`
  padding: 12px;
  background: ${(props): string => props.background};
  color: ${(props): string => props.text};
  border: 1px solid ${(props): string => props.border};
  border-radius: ${Radius.Small};
`;

type State = 'caution' | 'default';

function selectColor(state: State): SelectedColor {
  switch (state) {
    case 'caution':
      return {
        text: Color.Red.Red_100,
        background: Color.Red.Red_5,
        border: Color.Red.Red_100,
      };
    default:
      return {
        text: Color.Primary.Purple_50,
        background: Color.Primary.Purple_10,
        border: Color.Primary.Purple_50,
      };
  }
}

export interface Props {
  children: React.ReactNode;
  state: State;
}

export const Notification: React.VFC<Props> = ({children, state}) => {
  const color = selectColor(state);

  return (
    <Wrapper {...color}>
      <Text color={color.text}>{children}</Text>
    </Wrapper>
  );
};
