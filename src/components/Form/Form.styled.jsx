import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  label {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
  }

  input {
    width: 200px;
    margin: 0 auto;
  }
`;

export const Button = styled.button`
  width: 120px;
  margin: 0 auto;
`;
