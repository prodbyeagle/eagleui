import type { CardProps } from './Card.types';

/**
 * Card Component
 *
 * A flexible card component that can be styled with Tailwind CSS, including dark mode support via class manipulation.
 */
export const Card = ({ children, className }: CardProps) => {
	return (
		<div
			className={`p-6 bg-neutral-100 rounded-xl border border-neutral-200 dark:bg-neutral-950 dark:border-neutral-800 ${className || ''}`}
		>
			{children}
		</div>
	);
};
