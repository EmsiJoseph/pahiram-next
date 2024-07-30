// src/lib/menu-list.ts
import {siteConfig} from "@/config/site-config";
import {LucideIcon} from "lucide-react";
import {useUser} from "@/hooks/use-user"
import {LENDING_OFFICES_ACRONYMS} from "@/CONSTANTS/OFFICES_CONSTANTS";

type Submenu = {
    href: string;
    label: string;
    active: boolean;
};

type Menu = {
    href: string;
    label: string;
    active: boolean;
    icon: LucideIcon;
    submenus: Submenu[];
};

type Group = {
    groupLabel: string;
    menus: Menu[];
};

function getRoleBasedNavItems(office: string, role: string): Group[] {
    const officeNavItems = siteConfig.navItems.find((item) => (item as any)[office]);
    const navItems = siteConfig.navItems.find((item) => (item as any)[role]);
    const isLendingOffice = LENDING_OFFICES_ACRONYMS.includes(office) ? true : false;

    if (!officeNavItems){
        const lendingOfficeNavItems = siteConfig.navItems.find((item) => (item as any)["LENDING_OFFICES"]);
        const lendingOfficePositionNavItems = (lendingOfficeNavItems as any)["LENDING_OFFICES"].find((item: any) => item[role]);
        return lendingOfficePositionNavItems ? (lendingOfficePositionNavItems as any)[role] : [];
    }
    if (officeNavItems) {
        const positionNavItems = (officeNavItems as any)[office].find((item: any) => item[role]);
        return positionNavItems ? (positionNavItems as any)[role] : [];
    }
    return navItems ? (navItems as any)[role] : [];
}

function transformNavItems(navItems: Group[], pathname: string): Group[] {
    return navItems.map((group) => ({
        groupLabel: group.groupLabel,
        menus: group.menus.map((menu) => ({
            ...menu,
            active: pathname.includes(menu.href),
            submenus: menu.submenus.map((submenu) => ({
                ...submenu,
                active: pathname === submenu.href,
            })),
        })),
    }));
}

export function getMenuList(pathname: string): Group[] {
    const {role, office} = useUser;
    const roleBasedNavItems = getRoleBasedNavItems(office, role);
    return transformNavItems(roleBasedNavItems, pathname);
}

export function getFirstMenuItem(){
    const {role, office} = useUser;
    const navItems = getRoleBasedNavItems(office, role);
    console.log(navItems);
    if (navItems.length > 0 && navItems[0].menus.length > 0) {
        return navItems[0].menus[0].href;
    }
    return "/dashboard";
}