/**
 * Represents the properties for the Spinner component.
 */
export interface SpinnerProps {
	/**
	 * Optional additional className for custom styling of the spinner.
	 */
	className?: string;

	/**
	 * Optional size of the spinner, represented as a number.
	 * Defines the diameter of the spinner (e.g., in pixels).
	 */
	size?: number;

	/**
	 * Optional color of the spinner.
	 * Can be a CSS color value (e.g., 'red', '#ff0000', 'rgb(255, 0, 0)').
	 */
	color?: string;

	/**
	 * Optional stroke width of the spinner's circle.
	 * A number representing the thickness of the spinner's outline.
	 */
	strokeWidth?: number;

	/**
	 * Optional speed of the spinner's rotation.
	 * A number representing the duration (in seconds) for one full rotation.
	 */
	speed?: number;
}
