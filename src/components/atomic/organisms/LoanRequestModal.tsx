import { Modal, ModalBody, ModalContent, ModalHeader, ModalFooter, Button, Input, Textarea } from "@heroui/react";

interface LoanRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  available: number;
}

const LoanRequestModal = ({ isOpen, onClose, productName, available }: LoanRequestModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>Registrar Préstamo</ModalHeader>
        <ModalBody className="space-y-3 text-sm">
          <p className="text-gray-500">
            Complete el formulario para registrar un préstamo de este producto.
          </p>
          <Input label="Producto" value={productName} disabled />
          <div className="grid grid-cols-2 gap-3">
            <Input label="Cantidad Disponible" value={available.toString()} disabled />
            <Input label="Cantidad a Prestar" type="number" />
          </div>
          <Input label="Solicitante" placeholder="Nombre del solicitante" />
          <Input label="Departamento" placeholder="Departamento del solicitante" />
          <Input label="Fecha de Devolución" type="date" />
          <Textarea label="Notas" placeholder="Notas adicionales" />
        </ModalBody>
        <ModalFooter>
          <Button variant="light" onClick={onClose}>
            Cancelar
          </Button>
          <Button className="bg-gray-900 text-white">
            Confirmar Préstamo
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LoanRequestModal;
