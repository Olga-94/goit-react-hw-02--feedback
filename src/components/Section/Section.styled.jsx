import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 40px 0;
  margin: 0 auto;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  text-transform: uppercase;
  font-size: 32px;
  text-align: center;
  color: #3b3b3b;
  background-color: #ba9c9c;
  box-shadow: 10px 10px 20px 0 #ede6e6;
  & svg {
    margin-left: 20px;
  }
`;

export const Section = styled.main`
  justify-content: space-around;
  width: 1200px;
  border-radius: 5px;
  border: 1px solid #f0f0f3;
  margin: 50px auto 0;
  background-color: #f0f0f3;
`;