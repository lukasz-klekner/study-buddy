import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const StyledGrade = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme, average }) => {
    if (average > 4) return theme.colors.success;
    else if (average > 3) return theme.colors.warning;
    else if (average > 2) return theme.colors.error;
    else return theme.colors.grey;
  }};
  font-weight: bold;
`;

export const StyledInfo = styled.div`
  padding: 25px 20px;

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  p:first-child {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.l};
  }

  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
