export type NavItem = {
	href: string;
	label: string;
	description?: string;
};

export const primaryNav: NavItem[] = [
	{ href: '/', label: 'Start' },
	{ href: '/modul/inputphase', label: 'Inputphase' },
	{ href: '/modul/projektphase', label: 'Projektphase' },
	{ href: '/frameworks', label: 'Frameworks' },
	{ href: '/anwendungsfelder', label: 'Anwendungsfelder' }
];

export function isNavActive(pathname: string, href: string): boolean {
	if (href === '/') return pathname === '/';
	return pathname === href || pathname.startsWith(`${href}/`);
}
