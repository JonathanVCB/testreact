import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  width: 60%;
  height: 50%;
  position: absolute;
  top: 230px;
  right: 150px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const ModalContent = styled.main`
  width: 95%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 2rem;
  padding-top: 6rem;
`;

export const FormEdituser = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    width: 45%;

    > input {
      padding: 0.5rem;
    }
  }
`;

export const SectionOptions = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;

  > p {
    border: none;
    background-color: #f5f5f5;
    padding: 0.7rem;
    font-size: 0.8rem;
    font-weight: 700;
    color: #b7b6b7;
    cursor: pointer;
  }

  button {
    border: none;
    background-color: #f5f5f5;
    padding: 0.7rem;
    font-size: 0.8rem;
    font-weight: 700;
    color: #b7b6b7;
  }

  > div {
    display: flex;
    gap: 1rem;
  }
`;
