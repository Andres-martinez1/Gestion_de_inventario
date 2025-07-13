import { Tab } from "@headlessui/react";

const tabs = ["Información"];

export const ProfileContent = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6 w-full">
      <Tab.Group>
        <Tab.List className="flex space-x-2 rounded-xl bg-gray-100 p-1 mb-5">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                `w-full py-2.5 text-sm font-medium leading-5 rounded-lg ${
                  selected
                    ? "bg-white shadow text-black"
                    : "text-gray-500 hover:bg-white/50 hover:text-black"
                }`
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>

          <Tab.Panel>
            <h2 className="font-semibold text-lg">Sobre mí</h2>
            <p className="text-gray-600 mb-4 text-sm">
              Soy Andres Peña, instructor en TIC con experiencia en formación de
              profesionales en tecnología.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold mb-5">Información Personal</h3>
                <p className="mb-2">
                  <strong>Nombre:</strong> Andres Peña
                </p>
                <p className="mb-2">
                  <strong>Correo:</strong> andres.pena@example.com
                </p>
                <p>
                  <strong>Ubicación:</strong> Bogotá, Colombia
                </p>
              </div>
              <div className="mb-[30px]">
                <h3 className="font-semibold mb-5">Información Laboral</h3>
                <p className="mb-2">
                  <strong>Departamento:</strong> Formación TIC
                </p>
                <p className="mb-2">
                  <strong>Rol:</strong> Administrador
                </p>
                <p>
                  <strong>Fecha de Ingreso:</strong> Junio 2023
                </p>
              </div>
            </div>
          </Tab.Panel>
      </Tab.Group>
    </div>
  );
};
