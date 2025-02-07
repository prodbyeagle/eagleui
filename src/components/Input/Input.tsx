import React from 'react';
import { cn } from '../../lib/cn';
import type { InputProps } from './Input.types';

/**
 * A customizable input component that supports optional label, icon, and error message.
 * @param {InputProps} props - The properties to configure the Input component.
 * @param {string} [props.label] - The label displayed for the input.
 * @param {React.ComponentType} [props.icon] - An optional icon to display inside the input.
 * @param {string} [props.error] - An optional error message to display below the input.
 * @param {string} [props.className] - Additional custom classes to apply to the component.
 */
export const Input: React.FC<InputProps> = ({
	label,
	icon: Icon,
	error,
	className,
	...props
}: InputProps) => {
	return (
		<div className={cn('w-full', className)}>
			{label && (
				<label
					htmlFor={props.id || props.name}
					className='block mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-400'
				>
					{label}
				</label>
			)}
			<div className='relative flex items-center'>
				{Icon && (
					<div className='absolute left-3 flex items-center justify-center text-neutral-500 dark:text-neutral-400'>
						<Icon size={16} />
					</div>
				)}
				<input
					{...props}
					className={cn(
						'w-full h-10 pl-10 pr-4 py-2 text-sm bg-neutral-100 border border-neutral-300',
						'rounded-xl placeholder:text-neutral-500 text-neutral-900 focus:outline-hidden focus:ring-1',
						'focus:ring-neutral-400 dark:bg-neutral-950 dark:border-neutral-800 dark:placeholder:text-neutral-500',
						'dark:text-neutral-100 dark:focus:ring-neutral-400',
						error
							? 'focus:ring-red-400 dark:focus:ring-red-400'
							: ''
					)}
				/>
			</div>
			{error && <p className='mt-2 text-xs text-red-400'>{error}</p>}
		</div>
	);
};
