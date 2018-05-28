import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  position: relative;
`;

export const Elevator = styled.div`
  left: 15px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) scale(1);
  transition: all 0.3s;
  transition-delay: 0.3s;
  ${({ lifted }) => {
    if (lifted) {
      return css`
        top: calc(0% - 16px);
        left: 0;
        transform: translateY(0) scale(0.7);
      `;
    }
  }}
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

export const CoverLayer = styled.div`
  background-color: #F7F7F7;
  bottom: 0;
  height: ${({ active }) => (active ? "100%" : "0%")};
  left: 0;
  position: absolute;
  transition: all 0.3s;
  width: 100%;
  z-index: -1;
`;
