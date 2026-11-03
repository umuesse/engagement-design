export type NavItem = {
	href: string;
	label: string;
	description?: string;
};

export const primaryNav: NavItem[] = [
	{ href: '/', label: 'Start' },
	{ href: '/modul/inputphase', label: 'Inputphase' },
	{ href: '/modul/projektphase', label: 'Projektphase' },
	{ href: '/gamification', label: 'Gamification' },
	{ href: '/frameworks', label: 'Frameworks' },
	{ href: '/methods', label: 'Designmethoden' },
	{ href: '/anwendungsfelder', label: 'Anwendungsfelder' }
];

export const modulNav: NavItem[] = [
	{ href: '/modul/inputphase', label: 'Inputphase', description: '4–5 Tage Grundlagen' },
	{ href: '/modul/projektphase', label: 'Projektphase', description: 'Eigenständiges Projekt' }
];

export function isNavActive(pathname: string, href: string): boolean {
	if (href === '/') return pathname === '/';
	return pathname === href || pathname.startsWith(`${href}/`);
}

export function isModulSection(pathname: string): boolean {
	return pathname.startsWith('/modul');
}
