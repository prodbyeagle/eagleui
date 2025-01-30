// eagleui.d.ts
declare module 'eagleui' {
	import { LucideIcon } from 'lucide-react';

	/**
	 * Props for the Button component.
	 */
	export interface ButtonProps
		extends React.ButtonHTMLAttributes<HTMLButtonElement> {
		/**
		 * Defines the button style variant.
		 * @default 'primary'
		 */
		variant?: 'primary' | 'secondary' | 'ghost' | 'border' | 'danger';

		/**
		 * Defines the button size.
		 * @default 'md'
		 */
		size?: 'sm' | 'md' | 'lg';

		/**
		 * Icon to display inside the button.
		 */
		icon?: LucideIcon;

		/**
		 * Text content for the button.
		 */
		content?: string;
	}

	/**
	 * Props for the Dialog component, used to control dialog visibility and content.
	 */
	export interface DialogProps {
		/**
		 * Whether the dialog is open.
		 * @default false
		 */
		isOpen: boolean;

		/**
		 * Function to close the dialog.
		 */
		onClose: () => void;

		/**
		 * Optional title to display at the top of the dialog.
		 */
		title?: string;

		/**
		 * Content to display inside the dialog.
		 */
		children: React.ReactNode;

		/**
		 * Optional additional class names for styling.
		 */
		className?: string;

		/**
		 * Controls the intensity of the dialog shadow.
		 */
		shadowSize?: string;
	}

	/**
	 * Props for the Input component, which allows for labeled, icon-based input fields.
	 */
	export interface InputProps
		extends React.InputHTMLAttributes<HTMLInputElement> {
		/**
		 * Optional label text for the input field.
		 */
		label?: string;

		/**
		 * Icon to display inside the input field.
		 */
		icon: LucideIcon;

		/**
		 * Error message to display below the input, applying error styles.
		 */
		error?: string;
	}

	/**
	 * Props for the Select component, used to create a dropdown selector.
	 * @template T - The type of the selected value.
	 */
	export interface SelectProps<T> {
		/**
		 * The currently selected value.
		 */
		value: T;

		/**
		 * Callback triggered when the selection changes.
		 */
		onChange: (value: T) => void;

		/**
		 * List of options to display in the dropdown.
		 */
		options: { value: T; label: string }[];

		/**
		 * Optional custom class names for the select container.
		 */
		className?: string;

		/**
		 * Placeholder text when no option is selected.
		 * @default "Select an option"
		 */
		placeholder?: string;
	}

	/**
	 * Props for the TimeStamp component, used to display a formatted timestamp.
	 */
	export interface TimeStampProps {
		/**
		 * The timestamp to display, in ISO 8601 format.
		 */
		timestamp: string;

		/**
		 * Optional custom class names for the component.
		 */
		className?: string;

		/**
		 * Whether to show a clock icon next to the timestamp.
		 * @default true
		 */
		showIcon?: boolean;

		/**
		 * Custom icon to display instead of the default clock.
		 */
		icon?: LucideIcon;

		/**
		 * Whether to display additional text along with the timestamp.
		 * @default false
		 */
		extended?: boolean;

		/**
		 * Optional text to display when `extended` is enabled.
		 */
		text?: string;

		/**
		 * Whether to update the timestamp live every 10 seconds.
		 * @default false
		 */
		live?: boolean;

		/**
		 * Whether to append a suffix (e.g., "ago").
		 * @default true
		 */
		addSuffix?: boolean;
	}
}
