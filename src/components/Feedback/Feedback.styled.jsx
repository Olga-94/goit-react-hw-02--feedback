import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  padding-left:0;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 40px;
  }
`;