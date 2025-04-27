import {
  DocumentChartBarIcon,
  ChartBarIcon,
  CubeIcon,
  UsersIcon,
  BuildingStorefrontIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon
  
} from "@heroicons/react/16/solid";
import { MenuItem } from "../components/atomic/atoms/MenuItem";
import { routes } from "../routes/Routes";

export const adminMenu: MenuItem[] = [
  {
    code: "USERS",
    title: "Usuarios",
    path: routes.users,
    icon: <UsersIcon className="h-6 w-6 text-white-500" />,
    subItems: [
      { code: "Agregar Usuario", title: " Usuario", path: routes.users },
    ]
  },
  { code: "reports",
    title: "Reportes",
    path: "#",
    icon: <DocumentChartBarIcon className="w-5 h-5" />,
    subItems: [
      { code: "entrada", title: "Entrada", path: routes.entrada },
      { code: "salida", title: "Salida", path: routes.salida },
      { code: "inventario", title: "Inventario", path: routes.inventario },
      { code: "trazabilidad", title: "Trazabilidad", path: routes.trazabilidad },
      { code: "vencimientos", title: "Vencimientos", path: routes.vencimientos },

    ],
  },
  {
    code: "PRODUCTS",
    title: "Productos",
    path: routes.products,
    icon: <CubeIcon className="h-6 w-6 text-white-500" />,
  },
  {
    code: "WAREHOUSES",
    title: "Bodegas",
    path: routes.warehouses,
    icon: <BuildingStorefrontIcon className="h-6 w-6 text-white-500" />,
    subItems: [
      { code: "Categorias", title: " Categorias", path: routes.warehouses }
    ],
  },
  {
    code: "STATS",
    title: "Estadísticas",
    path: routes.stats,
    icon: <ChartBarIcon className="h-6 w-6 text-white-500" />,
    subItems: [
      { code: "entrada", title: "Entrada", path: routes.StaticE},
      { code: "salida", title: "Salida", path: routes.StacticS},
      { code: "inventario", title: "Inventario", path: routes.StacticI},
      { code: "trazabilidad", title: "Trazabilidad", path: routes.StacticT},
      { code: "vencimientos", title: "Vencimientos", path: routes.StacticV},
    ],
  },
 
  {
    code: "CONFIGURATION",
    title: "Configuración",
    path: routes.configuration,
    icon: <Cog6ToothIcon className="h-6 w-6 text-white-500" />,
  },
  {
    code: "HELP",
    title: "Ayuda",
    path: routes.help,
    icon: <QuestionMarkCircleIcon className="h-6 w-6 text-white-500" />,
  },
  {
    code: "PROFILE",
    title: "Perfil",
    path: routes.profile,
    icon: <UserCircleIcon className="h-6 w-6 text-white-500" />,
  },
  // {
  //   code: "CLOSE",
  //   title: "Cerrar sesión",
  //   path: routes.login,
  //   icon: <UserCircleIcon className="h-6 w-6 text-white-500" />,
  // }
];
