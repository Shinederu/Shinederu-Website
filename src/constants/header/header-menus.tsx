import { Home, Users } from 'lucide-react';
import { ReactElement } from "react";

type HeaderMenusType = {
    label: string;
    to: string;
    icon: ReactElement;
};

export const headerMenus: HeaderMenusType[] = [

    {
        label: 'menu_homepage',
        to: '/',
        icon: <Home />
    },
    {
        label: 'menu_live',
        to: '/streaming',
        icon: <Home />
    },
    {
        label: 'menu_vod',
        to: '/replay',
        icon: <Home />
    },
    {
        label: 'menu_community',
        to: '/community',
        icon: <Home />
    },
    {
        label: 'menu_about',
        to: '/about',
        icon: <Users />
    },




]