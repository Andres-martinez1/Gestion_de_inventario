import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { routes } from "../../../routes/Routes";
import logo from "../../../assets/images/logo.png";
import { MenuItem } from "../atoms/MenuItem";

interface NavbarAppProps {
  leftContent?: React.ReactNode;
  centerContent?: React.ReactNode;
  isAuthenticated?: boolean;
  email?: string;
  fullName?: string;
  menuItems?: Array<MenuItem>;
  onLogOut?: () => void;
}

const NavbarApp = ({
  leftContent,
  centerContent,
  isAuthenticated,
  fullName,
  email,
  menuItems,
  onLogOut,
}: NavbarAppProps) => {
  const NAME_APP = import.meta.env.VITE_NAME_APP;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("es");
  const navigate = useNavigate();

  const handleMenuItemClick = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  const languageOptions: Record<string, string> = {
    es: "Español",
    en: "English",
    fr: "Français",
    pt: "Português",
  };

  const languageCodes: Record<string, string> = {
    es: "ES",
    en: "US",
    fr: "FR",
    pt: "BR",
  };

  const handleLanguageChange = (key: string) => {
    setSelectedLang(key);
    // Aquí puedes agregar lógica para cambiar el idioma con i18n o guardar en localStorage
  };

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className="bg-gray-900 text-white">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarBrand className="gap-2 cursor-pointer" onClick={() => navigate(routes.home)}>
        <img src={logo} alt="Logo" className="w-10 h-10 " />
        <span className="font-semibold text-white hidden sm:block">{NAME_APP}</span>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex flex-1" justify="center">
        <Input
          classNames={{
            base: "w-full max-w-md rounded-lg",
            input: "text-white",
            inputWrapper: "bg-[#a7a7a7] border border-[#334155] text-white",
          }}
          placeholder="Buscar..."
          size="sm"
          type="search"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 items-center" justify="end">
        <Link  className="text-white hover:text-gray-300" cursor-pointer onClick={() => navigate(routes.home)}>🏠 Inicio</Link>

        {/* Dropdown de Idioma */}
        <Dropdown>
          <DropdownTrigger>
            <div className="flex items-center gap-1 text-white cursor-pointer hover:text-gray-300">
              🌐 <span className="font-medium uppercase">{languageCodes[selectedLang]}</span>
              <span className="hidden sm:inline">{languageOptions[selectedLang]}</span>
            </div>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Seleccionar idioma"
            variant="flat"
            className="w-40"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={[selectedLang]}
            onAction={(key) => handleLanguageChange(key as string)}
          >
            {Object.entries(languageOptions).map(([key, label]) => (
              <DropdownItem key={key} className="flex gap-2">
                <span className="w-6 font-medium uppercase">{languageCodes[key]}</span> {label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        <div className="text-white cursor-pointer hover:text-gray-300 relative" onClick={() => navigate(routes.notifications)}>
          🔔
          <span className="absolute top-0 right-0 text-xs text-red-500">●</span>
        </div>

        {isAuthenticated && (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform w-5 h-5 ml-2"
                size="sm"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">{fullName}</p>
                <p className="text-sm text-gray-500">@{email?.split("@")[0]}</p>
              </DropdownItem>
              <DropdownItem key="profilePage" onClick={() => navigate(routes.profile)}>Mi Perfil</DropdownItem>
              <DropdownItem key="config">Configuración</DropdownItem>
              <DropdownItem key="logout"  onPress={onLogOut}>
                Cerrar Sesión
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </NavbarContent>

      <NavbarMenu>
        {menuItems?.map((menu, index) => (
          <NavbarMenuItem key={`${menu.code}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              onPress={() => handleMenuItemClick(menu.path)}
              size="lg"
            >
              {menu.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarApp;
