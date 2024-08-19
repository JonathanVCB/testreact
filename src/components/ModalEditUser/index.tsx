import { useForm } from "react-hook-form";
import {
  Container,
  SectionOptions,
  FormEdituser,
  ModalContainer,
  ModalContent,
} from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/axios";
import { toast } from "react-toastify";

export interface iUpdateUserProps {
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
}

const ModalEditUser = ({ setShowModal, user }: any) => {
  function closeModal() {
    setShowModal(false);
  }

  const formSchema = yup.object().shape({
    first_name: yup.string(),
    email: yup.string().email("Email inválido"),
    last_name: yup.string(),
    avatar: yup.string(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUpdateUserProps>({
    resolver: yupResolver(formSchema),
  });

  async function UpdateUser(
    data: iUpdateUserProps,
    userID: string
  ): Promise<void> {
    if (data.email === "") {
      delete data.email;
    }
    if (data.first_name === "") {
      delete data.first_name;
    }
    if (data.last_name === "") {
      delete data.last_name;
    }
    if (data.avatar === "") {
      delete data.avatar;
    }
    console.log(data);

    try {
      await api.patch(`users/${userID}`, data);
      toast.success("Atualizado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado");
    } finally {
      //   window.location.reload();
    }
  }

  async function deleteUser() {
    try {
      await api.delete(`users/${user.id}`);
      toast.success("Deletado com sucesso");
    } catch (error) {
      toast.error("Algo deu errado");
    }
  }
  return (
    <ModalContainer>
      <Container>
        <ModalContent>
          <h3>EDITAR USUÁRIO</h3>
          <FormEdituser
            onSubmit={handleSubmit((data) => UpdateUser(data, user.id))}
          >
            <div>
              <label htmlFor="email">EMAIL</label>
              <input type="text" id="email" {...register("email")} />
            </div>

            <div>
              <label htmlFor="fname">FiRST NAME</label>
              <input type="text" id="fname" {...register("first_name")} />
            </div>

            <div>
              <label htmlFor="lname">LAST NAME</label>
              <input type="text" id="lname" {...register("last_name")} />
            </div>

            <div>
              <label htmlFor="avatar">AVATAR</label>
              <input type="text" id="avatar" {...register("avatar")} />
            </div>
            <SectionOptions>
              <p onClick={deleteUser}>EXCLUIR</p>
              <div>
                <button onClick={closeModal}>CANCELAR</button>
                <button type="submit">SALVAR</button>
              </div>
            </SectionOptions>
          </FormEdituser>
        </ModalContent>
      </Container>
    </ModalContainer>
  );
};

export default ModalEditUser;
