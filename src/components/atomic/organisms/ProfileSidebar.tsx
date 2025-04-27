import { Badge } from "../atoms/Badge"
import { ContactCard } from "../molecules/ContactCard"

export const ProfileSidebar = () => {
  return (
    <div className="space-y-4">
      {/* Avatar */}
      <div className="bg-blackwhite text-white rounded-2xl overflow-hidden shadow-md">
        <div className="h-24 bg-black" />
        <div className="flex flex-col items-center -mt-10 pb-4">
          <div className="w-28 h-28 rounded-full border-4 border-white bg-gray-300" />
          <h2 className="font-bold text-lg mt-2 text-black">Andres Peña</h2>
          <span className="text-gray-500 text-sm mb-5">@andrespena</span>
          <Badge label="Administrador " />
          <div className="mt-2 flex gap-2">
            <button className="bg-black text-white text-sm px-4 py-1 rounded-lg mt-5">✏️ Editar Perfil</button>
            <button className="bg-white-100 text-red-500 text-sm px-4 py-1 rounded-lg border mt-5">🔓 Cerrar Sesión</button>
          </div>
        </div>
      </div>

      {/* Contact */}
      <ContactCard email={"andres@gmail.com"} location={"Bogotá, Colombia"} dateJoined={"Junio 2023"} department={"Formación TIC"} />

      {/* Habilidades Técnicas */}
      <div className="bg-white p-4 rounded-2xl shadow-md border">
        <h3 className="font-semibold text-sm mb-2 flex items-center text-black-600">👨‍💻 Habilidades Técnicas</h3>
        <div className="flex flex-wrap gap-2">
          <Badge label="Redes de computadoras" />
          <Badge label="Programación en Python" />
          <Badge label="Bases de datos" />
          <Badge label="Gestión de sistemas" />
        </div>
      </div>
    </div>
  )
}
