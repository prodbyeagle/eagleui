export interface ButtonGroupProps {
	buttons: string[];
	activeButton: string;
	onButtonClick: (button: string) => void;
}
