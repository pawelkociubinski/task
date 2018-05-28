import styled, { css } from "styled-components";

import Icon from "../../atoms/Icon";

export const Container = styled.label`
  align-items: center;
  display: flex;
`;

export const Check = styled(Icon)`
  path {
    fill: ${({ checked }) => checked ? "#005691" : "transparent"};
  }
`;

export const Box = styled.div`
  align-items: center;
  background-color: #F0F0F0;
  border: none;
  border-bottom: 1px solid #CCCCCC;
  cursor: pointer;
  display: flex;
  height: 20px;
  justify-content: center;
  margin-right: 10px;
  min-height: 20px;
  min-width: 20px;
  width: 20px;
`;

export const Input = styled.input`
  display: none;
`;
