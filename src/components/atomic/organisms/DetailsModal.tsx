// components/organisms/DetailsModal.tsx
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import DetailRow from "../molecules/DetailRow";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: any; // reemplaza con tipo adecuado
}

const DetailsModal: React.FC<Props> = ({ isOpen, onClose, data }) => (
  <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={onClose}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 shadow-xl transition-all">
              <div className="flex justify-between items-center mb-4">
                <Dialog.Title className="text-lg font-medium text-gray-900">Detalle de Entrada</Dialog.Title>
                <XMarkIcon className="w-6 h-6 cursor-pointer" onClick={onClose} />
              </div>

              <div className="space-y-2">
                <DetailRow label="Producto" value={data.producto} />
                <DetailRow label="Cantidad" value={data.cantidad} />
                <DetailRow label="Bodega" value={data.bodega} />
                <DetailRow label="Fecha" value={data.fecha} />
                {/* Agrega más detalles según necesidad */}
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
);

export default DetailsModal;
