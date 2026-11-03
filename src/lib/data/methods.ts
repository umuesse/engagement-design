export type MethodStatus = 'published' | 'soon';

export type MethodItem = {
	slug: string;
	title: string;
	shortLabel: string;
	status: MethodStatus;
	href: string;
	summary: string;
	tag: string;
};

function method(
	slug: string,
	title: string,
	shortLabel: string,
	summary: string,
	tag: string,
	status: MethodStatus = 'soon'
): MethodItem {
	return {
		slug,
		title,
		shortLabel,
		status,
		href: `/methods/${slug}`,
		summary,
		tag
	};
}

export const methodItems: MethodItem[] = [
	method(
		'human-centred-design',
		'Menschzentrierter Gestaltungsprozess (ISO 9241-210)',
		'ISO 9241-210',
		'Nutzende früh einbeziehen, iterieren und gegen echte Aufgaben evaluieren — statt Motivationsannahmen zu zementieren.',
		'Prozess & Usability'
	),
	method(
		'double-diamond',
		'Double Diamond',
		'Double Diamond',
		'Problemraum erkunden und eingrenzen, dann Lösungsraum entwickeln — bevor Mechaniken im Vordergrund stehen.',
		'Prozess & Innovation'
	),
	method(
		'design-thinking',
		'Design Thinking',
		'Design Thinking',
		'Empathie, Problemdefinition, Ideation, Prototyping und Test — iterativ und nutzerzentriert (d.school).',
		'Prozess & Innovation'
	)
];

export function getMethodBySlug(slug: string): MethodItem | undefined {
	return methodItems.find((entry) => entry.slug === slug);
}
