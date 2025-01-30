import { LucideIcon } from 'lucide-react';

/**
 * Represents the properties for the TimeStamp component.
 */
export interface TimeStampProps {
	/**
	 * The timestamp value to display, typically in ISO string format.
	 */
	timestamp: string;

	/**
	 * Optional additional className for custom styling of the timestamp component.
	 */
	className?: string;

	/**
	 * Optional flag to show an icon next to the timestamp.
	 */
	showIcon?: boolean;

	/**
	 * Optional icon to display alongside the timestamp.
	 * Uses Lucide icons from the 'lucide-react' library.
	 */
	icon?: LucideIcon;

	/**
	 * Optional flag to indicate whether the timestamp should be displayed in an extended format.
	 */
	extended?: boolean;

	/**
	 * Optional custom text to display alongside or instead of the timestamp.
	 */
	text?: string;

	/**
	 * Optional flag to indicate whether the timestamp is live (e.g., for real-time updates).
	 */
	live?: boolean;

	/**
	 * Optional flag to add a suffix to the timestamp (e.g., 'ago', 'from now').
	 */
	addSuffix?: boolean;
}
