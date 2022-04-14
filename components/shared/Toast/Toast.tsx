import {ToastContainer, Slide} from 'react-toastify';
import styled from 'styled-components';
import {Portal} from '../internals/Portal';
import 'react-toastify/dist/ReactToastify.min.css';
import {Color, Radius, Typography, Shadow} from '../../../styles/variables';

const Wrapper = styled.div`
  overflow: hidden;

  & .Toastify__toast {
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    padding: 14px;
    border-radius: ${Radius.Small};
    box-shadow: ${Shadow.Elevation_8};
  }
  & .Toastify__toast-container--top-center {
    top: 0px;
    left: 50%;
    width: 343px;
    transform: translateX(-50%);
  }
  & .Toastify__toast-body {
    display: flex;
    align-items: center;
    padding: 0;
    margin: 0;
  }
  & .Toastify__toast-body div + div {
    padding: 0 16px;
    white-space: pre-wrap;
    ${Typography.Default_Normal_14};
  }
  & .Toastify__toast-icon {
    min-width: 20px;
    height: 20px;
  }
  & .Toastify__close-button {
    padding: 0;
    border: 0;
    background: transparent;
    opacity: 1;
    align-self: center;
  }
  & .Toastify__close-button svg {
    width: 16px;
    height: 16px;
  }
  & .Toastify__toast--success {
    background: ${Color.Primary.Purple_10};
    color: ${Color.Primary.Purple_50};
    border: 1px solid ${Color.Primary.Purple_50};
  }
  & .Toastify__toast--success .Toastify__toast-icon svg {
    fill: ${Color.Primary.Purple_50};
  }
  & .Toastify__toast--success .Toastify__close-button svg {
    fill: ${Color.Primary.Purple_50};
  }
  & .Toastify__toast--error {
    background: ${Color.Red.Red_5};
    color: ${Color.Red.Red_100};
    border: 1px solid ${Color.Red.Red_100};
  }
  & .Toastify__toast--error .Toastify__toast-icon svg {
    fill: ${Color.Red.Red_100};
  }
  & .Toastify__toast--error .Toastify__close-button svg {
    fill: ${Color.Red.Red_100};
  }
`;

export const Toast: React.VFC = () => {
  return (
    <Portal>
      <Wrapper>
        <ToastContainer
          newestOnTop
          closeOnClick
          hideProgressBar
          position="top-center"
          autoClose={1500}
          pauseOnHover={false}
          draggable={false}
          limit={1}
          transition={Slide}
        />
      </Wrapper>
    </Portal>
  );
};
