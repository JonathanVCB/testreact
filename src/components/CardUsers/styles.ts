import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  height: 5%;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 1rem;

  > p {
    width: 180px;
    display: flex;
    justify-content: center;
  }
`;

export const DivEdit = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 20%;
  justify-content: center;
  > img {
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: 0.4s;
  }
  > img:hover {
    transform: scale(1.1);
  }
`;

export const DivAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  > img {
    object-fit: cover;
    width: 70px;
    height: 100%;
    border-radius: 50%;
  }
`;
