import { Outlet } from "react-router-dom";
import tecnoparque from "../assets/images/tecnoparque.jpeg";

const AuthLayout = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-r from-black via-gray-900 to-black  flex items-center justify-center p-4">
      <div className="bg-[#dadde1] shadow-mb rounded-3xl overflow-hidden flex flex-col md:flex-row w-full max-w-5xl">
        {/* Formulario */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-sm">
            <Outlet />
          </div>
        </div>

        {/* Imagen */}
        <div className="w-[600px] h-[500px] hidden md:block">
          <img
            src={tecnoparque}
            alt="Tecnoparque"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
