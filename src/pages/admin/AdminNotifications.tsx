import { Alert, Button } from "@heroui/react";

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
          description="La carne de cerdo en la bodega de gastronomia esta proxima a caducar"
          endContent={
            <Button color="warning" size="sm" variant="flat">
              Ver detalle
            </Button>
          }
          title="Producto proximo a Caducar"
          variant="faded"
        />
      </div>

      <div className="my-6">
        <Alert
          color="success"
          title="Inventario Actualizado"
          description="El inventario de la bodega TIC ha sido actualizado exitosamente"
          variant="flat"
          endContent={
            <Button color="success" size="sm" variant="flat">
              Ver detalle
            </Button>
          }
        />
      </div>
    </>
  );
};

export default AdminNotificationsPage;
