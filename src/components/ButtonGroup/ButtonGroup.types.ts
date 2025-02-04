/**
 * Props for the ButtonGroup component.
 */
export interface ButtonGroupProps {
	/**
	 * An array of button labels.
	 */
	buttons: string[];

	/**
	 * The label of the currently active button.
	 */
	activeButton: string;

	/**
	 * Callback function to handle button click events.
	 * @param button - The label of the clicked button.
	 */
	onButtonClick: (button: string) => void;
}
