import styled from "styled-components";

export default {
  default: {
    color: "#707070",
  },
  active: {
    color: "#707070",
  },
};

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.color};
  font-size: 16px;
`;
