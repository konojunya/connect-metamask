import styled from 'styled-components';
import {Color, Shadow} from '../../../styles/variables';

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${Color.White.White_100};
  box-shadow: ${Shadow.Elevation_8};
  border: none;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${Color.White.White_100},
      0 0 0 4px ${Color.Primary.Purple_50};
  }
`;

export type Props = React.ComponentPropsWithoutRef<'button'> & {
  icon: React.ReactNode;
};

export const IconButton: React.VFC<Props> = ({icon, ...rest}) => {
  return <Wrapper {...rest}>{icon}</Wrapper>;
};
