import {
  Container,
  ContentContainer,
  DivContainer,
  DivHeaderLeft,
  DivHeaderRight,
  HeaderContainer,
  DivContainerUsers,
  MenuContainer,
  UsersContainer,
  InfosContainer,
  ListUsers,
} from "./styles";
import menu from "../../assets/hamburgmenu.png";
import notificaion from "../../assets/notification.png";
import { useEffect, useState } from "react";
import { api } from "../../services/axios";
import CardUser from "../../components/CardUsers";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [users, setUsers] = useState<any[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function LoadUser(): Promise<void> {
      const token = localStorage.getItem("@token");
      if (token) {
        try {
          const { data } = await api.get<any>("users");
          setUsers(data.data);
        } catch (error) {
          console.error(error);
          window.localStorage.clear();
        }
      } else {
        navigate("/login");
      }
    }
    LoadUser();
  }, []);

  return (
    <Container>
      <ContentContainer>
        <HeaderContainer>
          <DivHeaderLeft>
            <h5>SUPPLY CHAIN</h5>
            <img src={menu} alt="menu" />
          </DivHeaderLeft>
          <DivHeaderRight>
            <img src={notificaion} alt="menu" />
            <div></div>
          </DivHeaderRight>
        </HeaderContainer>

        <DivContainer>
          <MenuContainer>
            <div>
              <h5>USUÁRIOS</h5>
            </div>
          </MenuContainer>
          <DivContainerUsers>
            <div>
              <span>USUÁRIOS</span>
              <button>NOVO</button>
            </div>
            <UsersContainer>
              <InfosContainer>
                <h5>ID</h5>
                <h5>EMAIL</h5>
                <h5>NOME</h5>
                <h5>SOBRENOME</h5>
                <h5>AVATAR</h5>
              </InfosContainer>
              <ListUsers>
                {users?.map((user) => (
                  <CardUser key={user.id} user={user} />
                ))}
              </ListUsers>
            </UsersContainer>
          </DivContainerUsers>
        </DivContainer>
      </ContentContainer>
    </Container>
  );
};

export default HomePage;
