import React, { useEffect, useState, JSX } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { DialogProps } from './Dialog.types';

export const Dialog: React.FC<DialogProps> = ({
	isOpen,
	onClose,
	title,
	children,
	className,
	shadowSize,
}: DialogProps): JSX.Element | null => {
	const [show, setShow] = useState(isOpen);

	useEffect(() => {
		if (isOpen) {
			setShow(true);
		} else {
			const timer = setTimeout(() => setShow(false), 300);
			return () => clearTimeout(timer);
		}
	}, [isOpen]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isOpen) {
				onClose();
			}
		};
		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isOpen, onClose]);

	if (!show) return null;

	const shadowClass = shadowSize ? `shadow-${shadowSize}` : '';

	return (
		<div
			className={cn(
				'fixed inset-0 flex items-center justify-center z-50 transition-all duration-300',
				isOpen
					? 'opacity-100 backdrop-blur-md'
					: 'opacity-0 backdrop-blur-none',
				'bg-neutral-950/50 dark:bg-neutral-900/60'
			)}
		>
			<div
				className={cn(
					isOpen ? 'dialog-enter' : 'dialog-exit',
					'p-4 rounded-2xl',
					shadowClass,
					'bg-neutral-100 dark:bg-neutral-900 min-w-sm mx-5 relative transition-all duration-300 max-h-200 overflow-y-scroll border border-neutral-300 dark:border-neutral-800 max-w-200',
					className
				)}
			>
				<button
					onClick={onClose}
					className={cn(
						'absolute top-4 right-4 text-neutral-900 dark:text-neutral-100 p-0 bg-transparent',
						'hover:bg-neutral-200 hover:scale-105 dark:hover:bg-neutral-800',
						'transition-all duration-200 rounded-xs'
					)}
				>
					<X size={24} />
				</button>
				{title && (
					<h2 className='text-lg font-semibold mb-4 text-neutral-900 dark:text-neutral-100'>
						{title}
					</h2>
				)}
				<div>{children}</div>
			</div>
		</div>
	);
};
