import { useRef, useState } from "react";
import { Button } from "@heroui/react";
import UsersList from "../../components/admin/users/UsersList";
import Dialog from "../../components/atomic/molecules/Modal";
import UsersForm from "../../components/admin/users/UsersForm";
import { Action } from "../../models/action";

const UsersPage = () => {
  const [action, setAction] = useState<Action>(Action.ADD);
  const dialogRef = useRef<{ onOpen: () => void; onClose: () => void }>(null);

  return (
    <>
      <Button
        onPress={() => dialogRef?.current?.onOpen()}
        color="primary"
        type="submit"
        className="w-40 mb-2"
      >
        Agregar Nuevo
      </Button>
      <Dialog
        ref={dialogRef}
        title={action== Action.ADD ? "Agregar Usuario":'Editar Usuario'}
        content={
          <UsersForm
            actionType={action}
            onSave={() => {
              dialogRef?.current?.onClose();
            }}
          ></UsersForm>
        }
      />
      <UsersList onEdit={()=> {
        setAction(Action.EDIT)
        dialogRef?.current?.onOpen()
      }} />
    </>
  );
};
export default UsersPage;
