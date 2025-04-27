import { EnvelopeIcon, MapPinIcon, CalendarDaysIcon, BuildingOfficeIcon } from '@heroicons/react/24/solid';

interface ContactCardProps {
  email: string;
  location: string;
  dateJoined: string;
  department: string;
}

export const ContactCard = ({ email, location, dateJoined, department }: ContactCardProps) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md space-y-3 border">
      <h3 className="font-semibold text-lg">Información de Contacto</h3>
      <div className="flex items-center space-x-2 text-sm">
        <EnvelopeIcon className="w-5 h-5 text-blue-600" />
        <span>{email}</span>
      </div>
      <div className="flex items-center space-x-2 text-sm">
        <MapPinIcon className="w-5 h-5 text-green-600" />
        <span>{location}</span>
      </div>
      <div className="flex items-center space-x-2 text-sm">
        <CalendarDaysIcon className="w-5 h-5 text-purple-600" />
        <span>Miembro desde: {dateJoined}</span>
      </div>
      <div className="flex items-center space-x-2 text-sm">
        <BuildingOfficeIcon className="w-5 h-5 text-orange-600" />
        <span>{department}</span>
      </div>
    </div>
  );
};
