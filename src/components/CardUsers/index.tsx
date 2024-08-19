import { Card, DivAvatar, DivEdit } from "./styles";
import edit from "../../assets/edit.png";
import { useState } from "react";
import ModalEditUser from "../ModalEditUser";

const CardUser = ({ user }: any) => {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  return (
    <Card>
      <DivEdit>
        <img src={edit} alt="editar" onClick={() => setShowModal(true)} />
        <p>{user.id}</p>
      </DivEdit>
      <p>{user.email}</p>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
      <DivAvatar>
        <img src={user.avatar} alt="imagem" onClick={openModal} />
      </DivAvatar>

      {showModal && (
        <ModalEditUser setShowModal={setShowModal} user={user.id} />
      )}
    </Card>
  );
};

export default CardUser;
