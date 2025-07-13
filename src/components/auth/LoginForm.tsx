import { Alert, Button, Card, CardBody, Form, Input } from "@heroui/react";
import { useEffect, useState } from "react";
import { useAuth, useLogin } from "../../hooks/Auth/use-auth";
import { AuthLogin } from "../../models/auth";
import { User } from "../../models/user";
import { Role } from "../../models/role"; // Importa el enum o tipo Role

const LoginForm = () => {
  const [, setAction] = useState("");
  const [loginRequest, setLoginRequest] = useState<AuthLogin | null>(null);
  const { onLoginSuccess } = useAuth();

  const { isLoading, isSuccess, data, error } = useLogin(loginRequest);

  const onLogin = async (request: AuthLogin) => {
    setLoginRequest(null);
    setTimeout(() => setLoginRequest(request), 100);
  };

  useEffect(() => {
    if (isSuccess && data) {
      const userRole = data.user.rol;

      // Validar si el rol recibido está dentro del enum Role
      if (Object.values(Role).includes(userRole as Role)) {
        const newUser = new User(
          data.user.nombre,
          data.user.email,
          userRole as Role
        );
        onLoginSuccess(newUser);
      } else {
        console.error(`Rol inválido recibido: ${userRole}`);
      }
    }
  }, [isSuccess, data, onLoginSuccess]);

  return (
    <Card fullWidth className="w-full max-w-md rounded-3xl">
      <CardBody className="p-8">
        <Form
          className="w-full flex flex-col gap-7"
          validationBehavior="native"
          onReset={() => setAction("null")}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const formValues = Object.fromEntries(formData.entries());

            onLogin({
              email: formValues.email as string,
              password: formValues.password as string,
            });
          }}
        >
          <Input
            isRequired
            errorMessage="Por favor ingrese un email válido"
            label="Correo electrónico"
            name="email"
            placeholder="correo@ejemplo.com"
            type="email"
            labelPlacement="outside"
            className="text-base"
          />

          <Input
            isRequired
            errorMessage="Por favor ingrese una contraseña válida"
            label="Contraseña"
            name="password"
            placeholder="Ingrese su contraseña"
            type="password"
            labelPlacement="outside"
            className="text-base"
          />

          <Button
            isLoading={isLoading}
            type="submit"
            className="bg-[#151B2C] hover:bg-gray-20 text-white text-base py-3 rounded-xl w-full mt-2"
            disabled={isLoading}
          >
            {isLoading ? "Cargando..." : "Acceder"}
          </Button>

          {error && (
            <Alert
              color="danger"
              title="Ocurrió un error al intentar iniciar sesión"
              className="w-full mt-4"
            />
          )}
        </Form>
      </CardBody>
    </Card>
  );
};

export default LoginForm;
