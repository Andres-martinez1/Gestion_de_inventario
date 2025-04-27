import { Tab } from "@headlessui/react";

const tabs = ["Perfil", "Actividad Reciente", "Configuración"];

export const ProfileContent = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6 w-full">
      <Tab.Group>
        <Tab.List className="flex space-x-2 rounded-xl bg-gray-100 p-1 mb-4">
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

        <Tab.Panels>
          <Tab.Panel>
            <h2 className="font-semibold text-lg mb-2">Sobre mí</h2>
            <p className="text-gray-600 mb-4 text-sm">
              Soy Andres Peña, instructor en TIC con experiencia en formación de
              profesionales en tecnología.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold">Información Personal</h3>
                <p>
                  <strong>Nombre:</strong> Andres Peña
                </p>
                <p>
                  <strong>Correo:</strong> andres.pena@example.com
                </p>
                <p>
                  <strong>Ubicación:</strong> Bogotá, Colombia
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Información Laboral</h3>
                <p>
                  <strong>Departamento:</strong> Formación TIC
                </p>
                <p>
                  <strong>Rol:</strong> Administrador
                </p>
                <p>
                  <strong>Fecha de Ingreso:</strong> Junio 2023
                </p>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="space-y-4">
              {[
                {
                  icon: "📅",
                  text: "Generó reporte de inventario",
                  date: "Hoy, 10:30 AM",
                },
                {
                  icon: "📅",
                  text: "Actualizó productos en bodega TIC",
                  date: "Ayer, 3:45 PM",
                },
                {
                  icon: "📅",
                  text: "Aprobó solicitud de préstamo",
                  date: "12/05/2024, 9:15 AM",
                },
              ].map((activity, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 bg-red-100 text-red-500 rounded-full p-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 
              00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {activity.text}
                    </p>
                    <p className="text-xs text-gray-500">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </Tab.Panel>

          <Tab.Panel>
            <div className="space-y-4">
              <div className="flex justify-between items-start border rounded-xl p-4 hover:shadow transition">
                <div>
                  <h3 className="font-semibold text-sm">Cambiar Contraseña</h3>
                  <p className="text-gray-500 text-sm">
                    Actualiza tu contraseña para mayor seguridad
                  </p>
                </div>
                <button className="text-black-600 border rounded-md px-2 py-1 text-sm hover:shadow ">
                  Cambiar
                </button>
              </div>

              <div className="flex justify-between items-start border rounded-xl p-4 hover:shadow transition">
                <div>
                  <h3 className="font-semibold text-sm">Notificaciones</h3>
                  <p className="text-gray-500 text-sm">
                    Configura tus preferencias de notificaciones
                  </p>
                </div>
                <button className="text-black-600 border rounded-md px-2 py-1 text-sm hover:shadow">
                  Configurar
                </button>
              </div>

              <div className="flex justify-between items-start border rounded-xl p-4 hover:shadow transition">
                <div>
                  <h3 className="font-semibold text-sm">
                    Seguridad de la Cuenta
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Revisa la actividad de inicio de sesión
                  </p>
                </div>
                <button className="text-black-600 border rounded-md px-2 py-1 text-sm hover:shadow">
                  Revisar
                </button>
              </div>

              <div className="flex justify-between items-center border rounded-xl p-4 hover:shadow transition hover:shadow">
                <div>
                  <h3 className="font-semibold text-sm">Idioma</h3>
                  <p className="text-gray-500 text-sm">
                    Selecciona el idioma de la interfaz
                  </p>
                </div>
                <select className="border rounded-md px-2 py-1 text-sm">
                  <option>Español</option>
                  <option>Inglés</option>
                  <option>Frances</option>
                  <option>Portugues</option>
                </select>
              </div>

              <div className="flex justify-between items-center border rounded-xl p-4 hover:shadow transition">
                <div>
                  <h3 className="font-semibold text-sm">Tema</h3>
                  <p className="text-gray-500 text-sm">
                    Cambia entre modo claro y oscuro
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <span>Claro</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
                  </label>
                  <span>Oscuro</span>
                </div>
              </div>

              <div className="flex justify-between items-start border rounded-xl p-4 hover:shadow transition">
                <div>
                  <h3 className="font-semibold text-sm">
                    Información de Perfil
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Actualiza tu información personal
                  </p>
                </div>
                <button className="text-black-600 border rounded-md px-2 py-1 text-sm hover:shadow">
                  Editar
                </button>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
