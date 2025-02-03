import type { CardProps } from './Card.types';

/**
 * Card Component
 *
 * A flexible card component that can be styled with Tailwind CSS, including dark mode support via class manipulation.
 */
export const Card = ({ children, className }: CardProps) => {
	return (
		<div
			className={`p-6 bg-neutral-100 rounded-2xl border border-neutral-200 dark:bg-neutral-800/50 dark:border-neutral-700 ${className || ''}`}
		>
			{children}
		</div>
	);
};
