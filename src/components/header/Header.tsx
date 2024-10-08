import { headerMenus } from "@/constants/header/header-menus";
import { AuthContext } from "@/shared/context/AuthContext";
import { cn, Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";





const Header = () => {

    const { t } = useTranslation();
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    const loc = useLocation();

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);


    return (
        <header className="bg-indigo-900 text-gray-50">
            <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="xl:hidden" />
                    <div onClick={() => navigate('/')}>
                        <span >
                            Shinederu website
                        </span>
                    </div>
                </NavbarContent>

                {/* Menus centrés en mode Ordinateur */}
                <NavbarContent className="hidden xl:flex">
                    {headerMenus.map((menu, index) => {
                        const { to, label, icon } = menu;
                        const isActive = loc.pathname.split('/')[1] === to.split('/')[1];
                        return (
                            (
                                <NavbarItem key={index}>
                                    <Link to={to}>
                                        <div className={cn(
                                            isActive ? 'before:w-full before:left-0' : 'before:left-1/2')}
                                        >
                                            {icon}
                                            <span>{t(label)}</span>
                                        </div>
                                    </Link>
                                </NavbarItem>
                            )
                        );
                    })}
                </NavbarContent>

                {/* Bulle de profil */}
                <NavbarContent>
                    <NavbarItem>
                        <h2>login ?</h2>
                    </NavbarItem>
                </NavbarContent>

                {/* Menus en mode Smartphone dans le menu hamburger */}
                <NavbarMenu>
                    <div>
                        {headerMenus.map((menu, index) => {
                            const { to, label, icon } = menu;

                            return (
                                (
                                    <NavbarMenuItem key={index}>
                                        <Link

                                            to={to}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <div>
                                                {icon}
                                                <span>{t(label)}</span>
                                            </div>
                                        </Link>
                                    </NavbarMenuItem>
                                )
                            );
                        })}
                    </div>
                </NavbarMenu>
            </Navbar>
        </header>
    );



};

export default Header;