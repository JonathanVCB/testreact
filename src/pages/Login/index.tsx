import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  SectionLogin,
  Contentlogin,
  DivWelcome,
  DivLogin,
  MainContainer,
  DivLogo,
  FormContainer,
  DivFooter,
} from "./style";
import { toast } from "react-toastify";
import { api } from "../../services/axios";
import { useNavigate } from "react-router-dom";

export interface iLoginProps {
  username: string;
  password: string;
}

interface iUser {
  token: string;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    username: yup.string().required("Usuário Obrigatório!"),
    password: yup.string().required("Senha Obrigatória!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginProps>({
    resolver: yupResolver(formSchema),
  });

  async function Login(user: iLoginProps): Promise<void> {
    console.log(user);
    try {
      const { data } = await api.post<iUser>("login", user);

      window.localStorage.setItem("@token", data.token);
      toast.success("Logado com sucesso");

      navigate("/home");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado");
    }
  }

  return (
    <SectionLogin>
      <Contentlogin>
        <DivWelcome>
          <h1>Simplificamos</h1>
          <h1>Juntos</h1>
          <p>Supply Chain | Industrial | System</p>
        </DivWelcome>
        <DivLogin>
          <MainContainer>
            <DivLogo>
              <h3>LOGO</h3>
            </DivLogo>
            <FormContainer onSubmit={handleSubmit(Login)}>
              <h3>LOGIN</h3>
              <input
                type="text"
                id="username"
                placeholder="USUÁRIO"
                {...register("username")}
              />
              <input
                type="password"
                id="password"
                placeholder="SENHA"
                {...register("password")}
              />
              <button type="submit">LOGAR</button>
            </FormContainer>
            <DivFooter>
              <button>ESQUECI MINHA SENHA</button>
              <button>CADASTRE-SE</button>
            </DivFooter>
          </MainContainer>
        </DivLogin>
      </Contentlogin>
    </SectionLogin>
  );
};

export default LoginPage;
