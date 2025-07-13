import { Modal, ModalBody, ModalContent, ModalHeader, ModalFooter, Button } from "@heroui/react";

interface ProductDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequest: () => void;
  product: {
    nombre: string;
    categoria: string;
    marca: string;
    numeroSerie: string;
    ubicacion: string;
    bodega: string;
    estado: string;
    stock: number;
  };
}

const ProductDetailModal = ({ isOpen, onClose, onRequest, product }: ProductDetailModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader>Detalle del Producto</ModalHeader>
        <ModalBody>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-md w-full h-36 flex items-center justify-center">
                <span className="text-gray-400">Imagen</span>
              </div>
              <span className="text-xs mt-2 text-green-600 font-medium">
                En Stock: {product.stock} unidades
              </span>
              <h2 className="font-bold text-lg">{product.nombre}</h2>
              <p className="text-sm text-gray-600 text-center">
                Batidora industrial de alta capacidad para preparaciones gastronómicas.
              </p>
            </div>

            <div className="text-sm text-gray-700 space-y-2">
              <div>
                <h3 className="font-semibold">Información del Producto</h3>
                <p><strong>Categoría:</strong> {product.categoria}</p>
                <p><strong>Marca:</strong> {product.marca}</p>
                <p><strong>Número de Serie:</strong> {product.numeroSerie}</p>
              </div>
              <div>
                <h3 className="font-semibold mt-3">Información de Almacenamiento</h3>
                <p><strong>Ubicación:</strong> {product.ubicacion}</p>
                <p><strong>Bodega:</strong> {product.bodega}</p>
                <p><strong>Estado:</strong> {product.estado}</p>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button className="bg-gray-900 text-white" onClick={onRequest}>
            Solicitar Préstamo
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductDetailModal;
