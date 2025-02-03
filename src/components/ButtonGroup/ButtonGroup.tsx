import React from 'react';
import { ButtonGroupProps } from './ButtonGroup.types';

/**
 * A functional component that renders a group of buttons.
 *
 * @param {ButtonGroupProps} props - The properties for the ButtonGroup component.
 * @param {string[]} props.buttons - An array of button labels to be displayed.
 * @param {string} props.activeButton - The label of the currently active button.
 * @param {(button: string) => void} props.onButtonClick - The callback function to be called when a button is clicked.
 *
 * @returns {JSX.Element} The rendered ButtonGroup component.
 */
export const ButtonGroup: React.FC<ButtonGroupProps> = ({
	buttons,
	activeButton,
	onButtonClick,
}) => {
	return (
		<div className='flex gap-1 rounded-lg bg-neutral-900 p-1 w-full max-w-md mx-auto'>
			{buttons.map((button) => (
				<button
					key={button}
					onClick={() => onButtonClick(button)}
					className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
						activeButton === button
							? 'bg-neutral-700 text-white'
							: 'text-neutral-400 hover:text-white hover:bg-neutral-800'
					}`}
				>
					{button}
				</button>
			))}
		</div>
	);
};
