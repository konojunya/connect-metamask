import styled from 'styled-components';
import {Header, HEADER_HEIGHT} from '../../shared/Header';
import {Spacer} from '../../shared/Spacer';
import {Container} from '../Container';

const Wrapper = styled.div`
  padding-top: ${HEADER_HEIGHT}px;
`;

export interface Props {
  children: React.ReactNode;
}

export const CommonLayout: React.VFC<Props> = ({children}) => {
  return (
    <Wrapper>
      <Container>
        <Header />
        {children}
        <Spacer sizes={{mobile: {pt: 64}}} />
      </Container>
    </Wrapper>
  );
};
