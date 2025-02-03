import React from 'react';
import { cn } from '@/lib/cn';
import type { AvatarProps } from './Avatar.types';

export const Avatar: React.FC<AvatarProps> = ({
	src,
	alt = 'Avatar',
	size = 48,
	shape = 'circle',
	fallbackText,
}) => {
	return (
		<div
			className={cn(
				'flex items-center justify-center overflow-hidden text-neutral-700 dark:text-neutral-100 bg-neutral-300 dark:bg-neutral-900',
				shape === 'circle' && 'rounded-full',
				shape === 'rounded' && 'rounded-xl',
				shape === 'none' && 'rounded-none'
			)}
			style={{ width: size, height: size }}
		>
			{src ? (
				<img
					src={src}
					alt={alt}
					width={size}
					height={size}
					className='object-cover w-full h-full'
				/>
			) : (
				<span className='text-center'>
					{fallbackText ? fallbackText.charAt(0).toUpperCase() : '?'}
				</span>
			)}
		</div>
	);
};
