import { useRef, useState } from "react";
import { Button } from "@heroui/react";
import UsersList from "../../components/admin/users/UsersList";
import Dialog from "../../components/atomic/molecules/Modal";
import UsersForm from "../../components/admin/users/UsersForm";
import { Action } from "../../models/action";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const UsersPage = () => {
  const [action, setAction] = useState<Action>(Action.ADD);
  const dialogRef = useRef<{ onOpen: () => void; onClose: () => void }>(null);

  return (
    <>
      <div className="flex items-center mt-5 gap-4 mb-6">
        <Button
          onPress={() => dialogRef?.current?.onOpen()}
          color="primary"
          type="submit"
          className="w-40"
        >
          Agregar Nuevo
        </Button>
        <div className="relative w-full sm:w-[250px]">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            className="border pl-10 pr-3 py-2 rounded-lg w-full"
            placeholder="Buscar Usuario"
          />
        </div>

        <select className="border px-3 py-2 rounded-lg">
          <option>Roles</option>
          <option>Pasante</option>
          <option>Lider</option>
          <option>Coordinador</option>
        </select>
      </div>

      <Dialog
        ref={dialogRef}
        title={action == Action.ADD ? "Agregar Usuario" : "Editar Usuario"}
        content={
          <UsersForm
            actionType={action}
            onSave={() => {
              dialogRef?.current?.onClose();
            }}
          ></UsersForm>
        }
      />
      <UsersList
        onEdit={() => {
          setAction(Action.EDIT);
          dialogRef?.current?.onOpen();
        }}
      />
    </>
  );
};
export default UsersPage;
