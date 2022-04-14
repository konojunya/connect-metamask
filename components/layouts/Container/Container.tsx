import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0 16px;
`;

export interface Props {
  children: React.ReactNode;
}

export const Container: React.VFC<Props> = ({children}) => {
  return <Wrapper>{children}</Wrapper>;
};
