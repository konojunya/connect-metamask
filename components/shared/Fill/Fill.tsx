import styled from 'styled-components';

const Wrapper = styled.div`
  margin-right: -16px;
  margin-left: -16px;
`;

interface Props {
  children: React.ReactNode;
}

export const Fill: React.VFC<Props> = ({children}) => {
  return <Wrapper>{children}</Wrapper>;
};
