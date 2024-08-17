import styled from "styled-components";

export const SectionLogin = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: #f5f5f5;
`;

export const Contentlogin = styled.div`
  width: 93%;
  height: 92%;
  background-color: #fff;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

export const DivWelcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  gap: 1rem;
  > h1 {
    width: 50%;
    font-size: 5rem;
    color: #9f9f9f;
  }
  > p {
    position: absolute;
    bottom: 5rem;
    color: #b2b2b2;
  }
`;

export const DivLogin = styled.div`
  width: 50%;
  border: 15px solid #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContainer = styled.main`
  height: 94%;
  width: 94%;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: center;
`;

export const DivLogo = styled.div`
  width: 45%;
  height: 14%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 20%;

  > h3 {
    font-size: 0.75rem;
    color: #b4b4b4;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  > h3 {
    font-size: 0.75rem;
    color: #b4b4b4;
    font-weight: 700;
  }

  > input {
    width: 80%;
    padding: 1rem;
    border: none;
  }
  > button {
    padding: 1rem 3rem;
    color: #b4b4b4;
    border: none;
    background-color: #fff;
    font-weight: 700;
    border-radius: 10px;
  }
`;

export const DivFooter = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  padding-top: 20%;
  > button {
    border: none;
    color: #b4b4b4;
    font-weight: 1000;
  }
`;
