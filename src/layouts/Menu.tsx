import {
  ChartBarIcon,
  CubeIcon,
  UsersIcon,
  BuildingStorefrontIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
  ArchiveBoxArrowDownIcon,
  ArchiveBoxXMarkIcon,
  ClipboardDocumentCheckIcon,
  ChartBarSquareIcon,
  ClipboardDocumentListIcon,
  InboxStackIcon,
  PresentationChartBarIcon,
  ServerStackIcon,
  FolderPlusIcon,
  FolderMinusIcon,
  UserGroupIcon,
  TableCellsIcon,
  AdjustmentsVerticalIcon
  
} from "@heroicons/react/16/solid";
import { MenuItem } from "../components/atomic/atoms/MenuItem";
import { routes } from "../routes/Routes";
import { LogOut, Truck, } from "lucide-react";

export const adminMenu: MenuItem[] = [
  {
    code: "USERS",
    title: "Administrador",
    path: routes.users,
    icon: <UsersIcon className="h-6 w-6 text-white-500" />,
    subItems: [
      { code: "Gestión de usuarios", title: "Gestión de usuarios", path: routes.users,icon: <UserGroupIcon className="h-6 w-6 text-white-500" /> },
      { code: "Gestión de tablas", title: "Gestión de tablas", path: routes.tables,icon: <TableCellsIcon className="h-6 w-6 text-white-500" /> },
      { code: "Gestión de permisos", title: "Gestión de permisos", path: routes.permisos,icon: <AdjustmentsVerticalIcon className="h-6 w-6 text-white-500" />},

    ],
  },
  { code: "reports",
    title: "Reportes",
    path: "#",
    icon: <ClipboardDocumentListIcon className="w-5 h-5" />,
    subItems: [
      { code: "entrada", title: "Entrada", path: routes.entrada,icon: <FolderPlusIcon className="h-6 w-6 text-white-500" /> },
      { code: "salida", title: "Salida", path: routes.salida,icon: <FolderMinusIcon className="h-6 w-6 text-white-500" /> },
      { code: "inventario", title: "Inventario", path: routes.inventario,icon: <ServerStackIcon className="h-6 w-6 text-white-500" /> },
      { code: "trazabilidad", title: "Trazabilidad", path: routes.trazabilidad,icon: <PresentationChartBarIcon className="h-6 w-6 text-white-500" /> },

    ],
  },
  {
    code: "PRODUCTS",
    title: "Productos",
    path: routes.products,
    icon: <CubeIcon className="h-6 w-6 text-white-500" />,
  },
  {
    code: "Inventory",
    title: "Invetario",
    path: routes.warehouses,
    icon: <InboxStackIcon className="h-6 w-6 text-white-500" />,
    subItems: [
      { code: "Bodoegas", title: "Bodoegas", path: routes.warehouses,
        icon: <BuildingStorefrontIcon className="h-6 w-6 text-white-500" />
       },
       { code: "Movimientos", title: "Movimientos", path: routes.movimientos,icon: <Truck className="h-6 w-6 text-white-500" /> }
    ],
  },
  {
    code: "STATS",
    title: "Estadísticas",
    path: routes.stats,
    icon: <ChartBarIcon className="h-6 w-6 text-white-500" />,
    subItems: [
      { code: "entrada", title: "Entrada", path: routes.StaticE,
        icon:<ArchiveBoxArrowDownIcon className="h-6 w-6 text-white-500" />
      },
      { code: "salida", title: "Salida", path: routes.StacticS,
        icon:<ArchiveBoxXMarkIcon className="h-6 w-6 text-white-500" />
      },
      { code: "inventario", title: "Inventario", path: routes.StacticI,
        icon:<ClipboardDocumentCheckIcon className="h-6 w-6 text-white-500" />},
      { code: "trazabilidad", title: "Trazabilidad", path: routes.StacticT,
        icon:<ChartBarSquareIcon className="h-6 w-6 text-white-500" />},
    ],
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
    icon: <UserCircleIcon className="h-6 w-6 text-white-500 " />,
  },
{
    code: "LOGOUT", // importante: lo detecta el Sidebar
    title: "Cerrar Sesión",
    path: routes.login,
    icon: <LogOut className="h-6 w-6 text-white-500" />,
  },
  
];
