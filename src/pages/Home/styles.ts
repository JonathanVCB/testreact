import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 95%;
  height: 85%;
  background-color: #fff;
`;

export const HeaderContainer = styled.header`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: row;
`;

export const DivHeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 20%;
  justify-content: space-between;
  align-items: center;
  padding-left: 1%;
  > h5 {
    font-size: 1rem;
    color: #a8a8a8;
  }
  > img {
    object-fit: cover;
    width: 10%;
  }
`;
export const DivHeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  padding-right: 2%;

  > img {
    height: 70%;
  }
  > div {
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background-color: #d8d8d8;
  }
`;

export const DivContainer = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: row;
`;

export const MenuContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    border: 2px solid #dedede;
    border-right: none;
  }
  > div > h5 {
    padding-left: 1rem;
    font-size: 1rem;
    color: #a6a6a6;
    font-weight: 700;
  }
`;
export const DivContainerUsers = styled.div`
  width: 80%;
  height: 100%;
  border: 12px solid #d8d8d8;
  border-bottom: none;
  display: flex;
  flex-direction: column;
  > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 2%;
    padding-right: 2%;
    height: 6%;
    > span {
      color: #8b8b8b;
      font-size: 1rem;
    }
    > button {
      border: none;
      background-color: #f5f5f5;
      color: #bababa;
      width: 8%;
      height: 70%;
      font-size: 0.8rem;
      font-weight: 700;
    }
  }
`;

export const UsersContainer = styled.main`
  width: 96%;
  height: 100%;
  background-color: #f5f5f5;
  margin: 0 auto;
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding-left: 5%;
  width: 100%;
  height: 5%;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 1rem;
  > h5 {
    width: 20%;
    display: flex;
    justify-content: center;
  }
`;

export const ListUsers = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: max-content;
`;
