import { UserIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

type ContactCardProps = {
  name: string;
  role: string;
  email: string;
  phone: string;
};

const ContactCard = ({ name, role, email, phone }: ContactCardProps) => {
  return (
    <div className="border border-gray-200 rounded-2xl p-4 max-w-sm shadow-sm bg-white">
      <div className="flex items-center space-x-2 mb-4 text-blue-600 font-semibold">
        <UserIcon className="w-5 h-5" />
        <h2 className="text-base">Información del Encargado</h2>
      </div>

      <div className="mb-3">
        <p className="text-xs text-gray-500">Nombre</p>
        <p className="text-sm font-medium">{name}</p>
      </div>

      <div className="mb-3">
        <p className="text-xs text-gray-500">Cargo</p>
        <p className="text-sm font-medium">{role}</p>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
        <EnvelopeIcon className="w-4 h-4 text-gray-500" />
        <span>{email}</span>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-700">
        <PhoneIcon className="w-4 h-4 text-gray-500" />
        <span>{phone}</span>
      </div>
    </div>
  );
};

export default ContactCard;
