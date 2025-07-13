import { ProfileSidebar } from "../components/atomic/organisms/ProfileSidebar"
import { ProfileContent } from "../components/admin/ProfileContent"

const AdminProfile = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-black ml-5 mt-5">Mi Perfil</h1>
      <p className="text-gray-600 mb-6 ml-5">Gestiona tu información personal y preferencias</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-5">
        <div><ProfileSidebar /></div>
        <div className="md:col-span-2"><ProfileContent /></div>
      </div>
    </>
  )
}

export default AdminProfile;
