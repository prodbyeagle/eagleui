import React from 'react';
import { cn } from '../../lib/cn';
import type { TextareaProps } from './Textarea.types';

export const Textarea: React.FC<TextareaProps> = ({ label, error, className, ...props }) => {
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
			<textarea
				{...props}
				className={cn(
					'w-full p-3 text-sm bg-neutral-100 border border-neutral-300',
					'rounded-xl placeholder:text-neutral-500 text-neutral-900 focus:outline-hidden focus:ring-1',
					'focus:ring-neutral-400 dark:bg-neutral-950 dark:border-neutral-800 dark:placeholder:text-neutral-500',
					'dark:text-neutral-100 dark:focus:ring-neutral-400 resize-none',
					error ? 'focus:ring-red-400 dark:focus:ring-red-400' : ''
				)}
			/>
			{error && <p className='mt-2 text-xs text-red-400'>{error}</p>}
		</div>
	);
};
