import styled from 'styled-components';
import {Depth, Shadow} from '../../../styles/variables';

export const HEADER_HEIGHT = 56;

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.56);
  backdrop-filter: blur(16px);
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: ${Depth.Header};
  box-shadow: ${Shadow.Elevation_16};
`;

export const Header: React.VFC = () => {
  return (
    <Wrapper>
      <h1>Header</h1>
    </Wrapper>
  );
};
