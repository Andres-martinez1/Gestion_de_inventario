import { Button, Form, Input } from "@heroui/react";
import React, { useState } from "react";
import { Action } from "../../../models/action";
import { userSchema } from "../../../schemas/UserForm.schema";

interface UsersFormProps {
  onSave?: () => void;
  actionType?: Action;
}

const UsersForm = ({ actionType, onSave }: UsersFormProps) => {
  const [action, setAction] = useState("");
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  return (
    <Form
      className="w-full mx-auto flex-col items-center gap-4"
      validationBehavior="native"
      onReset={() => setAction("null")}
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // Validacion con Zod
        const parsed = userSchema.safeParse(data);

        if (!parsed.success) {
          // Mostrar errores
          setErrorMessages(parsed.error.issues.map((issue) => issue.message));
          return;
        }

        // Si pasa la validación
        setAction(`submit ${JSON.stringify(parsed.data)}`);
        if (onSave) onSave();
      }}
    >
      <Input
        isRequired
        labelPlacement="outside"
        name="name"
        placeholder="Nombre"
        type="text"
      />
      <Input
        isRequired
        labelPlacement="outside"
        name="lastName"
        placeholder="Apellidos"
        type="text"
      />
      <Input
        isRequired
        labelPlacement="outside"
        name="email"
        placeholder="Correo"
        type="text"
      />
      <Input
        isRequired
        labelPlacement="outside"
        name="role"
        placeholder="Rol"
        type="text"
      />
      <Input
        isRequired
        labelPlacement="outside"
        name="password"
        placeholder="Contraseña"
        type="password"
      />
      <Input
        isRequired
        labelPlacement="outside"
        name="confirmPassword"
        placeholder="Confirmar Contraseña"
        type="password"
      />
      {errorMessages.length > 0 && (
        <div className="text-red-500 text-sm">
          <ul className="list-disc pl-5">
            {errorMessages.map((msg, i) => (
              <li key={i}>{msg}</li>
            ))}
          </ul>
        </div>
      )}

      <Button color="primary" type="submit" className="w-1/2 mt-2 mx-auto">
        {actionType === Action.ADD ? "Agregar" : "Guardar"}
      </Button>
    </Form>
  );
};

export default UsersForm;
