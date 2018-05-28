import styled from "styled-components";

import Icon from "../../atoms/Icon";

export const Container = styled.div`
  cursor: pointer;
  position: relative;
`;

export const Dropdown = styled.div`
  background-color: #FFF;
  border-bottom: 1px solid #DEDFE0;
  left: 0;
  max-height: 240px;
  min-height: 10px;
  overflow-y: scroll;
  position: absolute;
  right: 0;
  z-index: 10;
`;

export const Cell = styled.div`
  background-color: ${({ isSelected }) =>
    (isSelected ? "#F7F7F7" : "inherit")};
  overflow: hidden;

  &:hover {
    background-color: #F7F7F7;
  }
`;

export const Label = styled.div`
  color: #7F8FA4;
  overflow: hidden;
  padding: 15px 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const IconWrapper = styled(Icon)`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%) rotate(
    ${({ isOpen }) => (isOpen ? "180deg" : "0deg")}
  );
  transition: all 0.3s;
`;
