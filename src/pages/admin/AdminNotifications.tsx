import { Alert, Button, Image } from "@heroui/react";

const AdminNotificationsPage = () => {
  return (
    <>
      <h1 className="text-large">Notificaciones</h1>
      <p className="my-3 text-default-400 text-small">
        Vista general del sistema de Notificaciones
      </p>

      <div className="my-6">
        <Alert
          color="warning"
          description="La carne de cerdo en la bodega de gastronomía está próxima a caducar"
          title={
            <div className="flex items-center gap-6">
              <img
                src="../../assets/images/tecnoparque.jpeg"
                className="w-20 h-20"
              />
              Producto próximo a Caducar
            </div>
          }
          variant="faded"
        />
      </div>

      <div className="my-6">
        <Alert
          color="success"
          description="El inventario de la bodega TIC ha sido actualizado exitosamente"
          title={
            <div className="flex items-center gap-2">
              <img
                src="../../assets/images/tecnoparque.jpeg"
                className="w-20 h-20"
              />
              Inventario Actualizado
            </div>
          }
        />
      </div>
    </>
  );
};

export default AdminNotificationsPage;
