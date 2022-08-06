import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: #211d28;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: white;
`;
export const Subtitle = styled.h2`
  opacity: 0.5;
  color: white;
`;
export const Input = styled.input`
  border: 1px #575353 solid;
  background: transparent;
  border-radius: 8px 8px 0 0;
  min-width: 20rem;
  height: 2rem;
  color: #575353;
  padding: 10px;
  :hover {
    border-color: #bb1fd2;
  }
`;

export const InputPassword = styled(Input)`
  border-radius: 0 0 8px 8px;
`;

export const ContainerForgot = styled.button`
  min-width: 20rem;
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  color: #bb1fd2;
  font-size: 1rem;
  background: none;
  border: none;
`;
export const TextForgot = styled.h2`
  color: #bb1fd2;
  font-size: 1rem;
`;
export const ButtonLogin = styled.button`
  min-width: 20rem;
  min-height: 3rem;
  background: linear-gradient(135deg, #9a4dff 0%, #f600dd 100%);
  box-shadow: 0px 4px 20px rgba(188, 49, 243, 0.5);
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 1rem;
  line-height: 20px;
  font-weight: 700;
`;

export const Divisor = styled.div`
  margin: 2rem;
  min-width: 20rem;
  border: 1px solid rgba(252, 221, 236, 0.2);
`;

export const ButtonMetaMask = styled(ButtonLogin)``;
export const ButtonInsideMetaMask = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #291d32;
  min-height: 2.5rem;
  min-width: 20.8rem;
  border-radius: 4px;
  border: none;
  h1 {
    margin: 0;
    font-size: 1.1rem;
    background: -webkit-linear-gradient(135deg, #9a4dff 0%, #f600dd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  img{
    margin-left: 0.5rem;
  }
`;