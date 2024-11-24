import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoadingCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #000;
  animation: ${rotate} 0.8s linear infinite;

  &::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 30px;
    background-color: red;
    border-bottom: 4px solid #000;
    top: -1px;
  }

  &::before {
    content: '';
    position: absolute;
    background-color: #fff;
    width: 14px;
    height: 14px;
    border: 4px solid #000;
    border-radius: 50%;
    bottom: 20px;
    right: 20px;
    z-index: 1;
  }
`;

function Loading() {
  return (
    <LoadingContainer>
      <LoadingCircle />
    </LoadingContainer>
  );
}

export default Loading;
