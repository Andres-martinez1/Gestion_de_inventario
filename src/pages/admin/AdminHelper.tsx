import { useState } from "react";
import HelpCenter from "../../components/atomic/molecules/HelpCenter";
import Accordion from "../../components/atomic/molecules/Accordion";

const faqs = [
  {
    question: "¿Cómo puedo acceder al sistema?",
    answer:
      "Para acceder al sistema, utilice las credenciales proporcionadas por su administrador. Ingrese su nombre de usuario y contraseña en la página de inicio de sesión. Si tiene problemas para acceder, utilice la opción 'Olvidé mi contraseña' o contacte al soporte técnico.",
  },
  {
    question: "¿Cómo cambiar mi contraseña?",
    answer: "Dirígete a tu perfil, selecciona 'Cambiar contraseña' e ingresa los datos solicitados.",
  },
  {
    question: "¿Qué hago si olvidé mi contraseña?",
    answer: "Haz clic en 'Olvidé mi contraseña' en la pantalla de login y sigue las instrucciones.",
  },
];

const HelpCenterPage = () => {
  const [tab, setTab] = useState("Preguntas Frecuentes");

  return (
    <div className="p-6 max-w-4xl mx-auto bg-50 min-h-screen">
      <h1 className="text-3xl font-bold">Centro de Ayuda</h1>
      <p className="text-gray-600">Encuentra respuestas a tus preguntas y aprende a usar el sistema</p>

      {/* Barra de búsqueda (solo visual por ahora) */}
      <div className="bg-blue-50 my-8 p-6 rounded-xl text-center">
        <h2 className="text-xl font-semibold mb-2">¿Cómo podemos ayudarte?</h2>
        <input
          type="text"
          placeholder="Buscar en la documentación..."
          className="px-4 py-2 w-full max-w-md border rounded-lg"
        />
      </div>

      {/* Tabs */}
      <HelpCenter activeTab={tab} onChange={setTab} />

      {/* Contenido */}
      {tab === "Preguntas Frecuentes" && (
        <div className="bg-white rounded-xl p-4 border space-y-4">
          <h3 className="font-bold text-lg">Preguntas Generales</h3>
          {faqs.map((faq, index) => (
            <Accordion key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      )}

      {tab === "Tutoriales" && (
        <div className="bg-white rounded-xl p-4 border text-sm text-gray-600">
          <p>Próximamente tutoriales en video y paso a paso para ayudarte a navegar el sistema.</p>
        </div>
      )}

      {tab === "Contacto" && (
        <div className="bg-white rounded-xl p-4 border text-sm text-gray-600">
          <p>Si necesitas más ayuda, puedes contactarnos a soporte@ejemplo.com o al +57 300 000 0000</p>
        </div>
      )}
    </div>
  );
};

export default HelpCenterPage;